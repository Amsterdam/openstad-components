'use strict';

import FingerprintJS from '@fingerprintjs/fingerprintjs';
import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentChoices from './choices.jsx';
import OpenStadComponentForms from '../../forms/index.jsx';
import OpenStadComponentPreviousNextButtonBlock from '../../previous-next-button-block/index.jsx';
import fetchChoicesGuide from '../lib/fetch.js'

export default class OpenStadComponentChoicesGuideResult extends OpenStadComponent {

  constructor(props) {

    super(props, {
      type: 'default',
      submission: {
        type: 'none',
        requireLoginSettings: {
          title: "Stemcode",
          description: "Om te kunnen stemmen vul je de stemcode in die je per post hebt ontvangen. Wij controleren je stemcode op geldigheid. Als dat gelukt is kun je stemmen.",
          buttonTextLogin: "Vul je stemcode in",
          buttonTextLoggedIn: "Geldige stemcode",
          buttonTextAlreadySubmitted: "Ongeldige stemcode",
          changeLoginLinkText: "Vul een andere stemcode in",
          loggedInMessage: "Het controleren van je stemcode is gelukt! Klik op onderstaande knop om je keuze in te sturen.",
          alreadySubmittedMessage: "Deze stemcode is al gebruikt om te stemmen. Een stemcode kan maar één keer gebruikt worden.",
        },
      },
      choices: {
        title: {
          noPreferenceYet: 'Je hebt nog geen keuze gemaakt',
          preference: 'Jouw voorkeur is {preferredChoice}',
          inBetween: 'Je staat precies tussen meerdere voorkeuren in'
        },
        withPercentage: true,
        minLabel: null,
        maxLabel: null,
      },
    });

    this.config.loginUrl = this.config.loginUrl || '/oauth/login?returnTo=' + encodeURIComponent(document.location.href);

    let allValues = OpenStadComponentLibs.localStorage.get('osc-choices-guide.values') || {};
    let allScores = OpenStadComponentLibs.localStorage.get('osc-choices-guide.scores') || {};
    
    if (this.config.submission.type == 'form') {
      // TODO: title? really?
      this.onFormChange = this.onFormChange.bind(this);
      let allFormvalues = OpenStadComponentLibs.localStorage.get('osc-choices-guide.formvalues') || {};
      let formvalues = allFormvalues[ this.config.choicesGuideId ] || {};
      this.config.submission.form.fields.forEach(field => {
        if (typeof formvalues[field.title.toLowerCase()] != 'undefined') { field.value = formvalues[field.title.toLowerCase()]; }
      });
    }

    this.state = {
      title: '',
      answers: allValues[ this.config.choicesGuideId ],
      scores: allScores[ this.config.choicesGuideId ],
    };

  }

  componentDidMount(prevProps, prevState) {
    this.fetchData();
  }

  fetchData() {

    let self = this;
    fetchChoicesGuide({ config: self.config })
      .then((data) => {
        self.setState(data, () => {
          self.startGuide();
        });
      })
      .catch((err) => {
        console.log('Niet goed');
        console.log(err);
      });

  }

  startGuide() {
    let self = this;
    let scores, planePos;
    ( {scores, planePos} = self.choicesElement && self.choicesElement.calculateScores(self.state.answers) );

    let choicesTitle = '';
    let name;
    let preferredChoiceId = -1;
    if ( self.choicesElement ) {

      let choiceElement = self.choicesElement.getPreferedChoice({planePos});
      if ( choiceElement ) {
        choicesTitle = self.config.choices.title.preference.replace('\{preferredChoice\}', choiceElement && choiceElement.getTitle(self.state.scores[choiceElement.config.divId]) || choicesTitle);
        preferredChoiceId = choiceElement.divId
      } else {
        choicesTitle = self.config.choices.title.inBetween;
      }

      self.setState({ title: choicesTitle })

		  var event = new window.CustomEvent('osc-choices-guide-result-is-ready', {
        detail: {
          preferredChoice: {
            name,
            title: choicesTitle,
            preferredChoiceId
          },
          answers: self.state.answers,
          scores: self.state.scores,
        }
      });
		  document.dispatchEvent(event);

      if (self.config.submission.type == 'auto') {
        self.submitResult()
      }

    }
    
  }

  submitResult() {

    let self = this;

    let formValues;

    let errorState1;
    let requireLogin = !!(self.state.choicesGuideConfig && self.state.choicesGuideConfig.requiredUserRole);
    if ( requireLogin && !self.isUserLoggedIn() ) {
      let element = document.querySelector('.osc-require-login');
      if (element) element.scrollIntoView({behavior: 'smooth'});
      errorState1 = {
        submissionError: {
          message: 'Klik hierboven om je stem te valideren.',
          type: 'unknown'
        }
      };
    }

    let errorState2;
    if (self.config.submission.type == 'form') {
      formValues = self.form.getValues();
      let isValid = self.form.validate({ showErrors: true, scrollTo: true });
      if (!isValid) errorState2 = true;
    }

    if (errorState1 || errorState2) {
      self.setState(errorState1, () => {
        // TODO: de error wordt overschreven; dat moet nog opgelost. Tot dan staat dit hier extra
        self.form.validate({ showErrors: true, scrollTo: true });
      })
      return;
    };
    
    FingerprintJS.load().then(fp => {
      fp.get().then(result => {
        const visitorId = result.visitorId;

        let url = `${self.config.api && self.config.api.url }/api/site/${  self.config.siteId  }/choicesguide/${  self.config.choicesGuideId  }/result`;
        let headers = OpenStadComponentLibs.api.getHeaders(self.config);
        let body = {
          result: {
            answers: self.state.answers,
            scores: self.state.scores,
          },
          extraData: formValues,
          userFingerprint: visitorId,
        };

        fetch(url, {
          method: 'POST',
          headers,
          body: JSON.stringify(body),
        })
          .then( function(response) {
            if (response.ok) {
              return response.json();
            }
            throw response.text();
          })
          .then(function(json) {
            if (self.config.submission.type == 'form') {
              OpenStadComponentLibs.localStorage.remove('osc-choices-guide.values');
              OpenStadComponentLibs.localStorage.remove('osc-choices-guide.scores');
              OpenStadComponentLibs.localStorage.remove('osc-choices-guide.formvalues');
              document.location.href = self.config.afterUrl
            }
          })
          .catch(function(error) {
            error.then(function(messages) {
              try {
                messages = JSON.parse(messages)
              } catch (err) {}
              let message = ( Array.isArray(messages) && messages[0] && messages[0].message || messages[0] ) || ( messages.message || messages );
              self.setState({
                submissionError: {
                  message: message.toString(),
                  type: message == 'Je hebt je mening al ingestuurd' ? 'alreadySubmitted' : 'unknown'
                }
              }, () => {
                return console.log(messages);
              });
            });
          });
      });
    });

  }

  isUserLoggedIn() {
    return this.config.user && this.config.user.role && this.config.user.role != 'anonymous';
  }

  onFormChange() {

    let self = this;

    let allFormvalues = OpenStadComponentLibs.localStorage.get('osc-choices-guide.formvalues') || {};
    allFormvalues[self.config.choicesGuideId] = self.form.getValues();
    OpenStadComponentLibs.localStorage.set('osc-choices-guide.formvalues', allFormvalues);

  }
  
  render() {

    let self = this;
    let data = self.props && self.props.data || {};

    let choices = self.state.choices;
    let questionGroup;
    if (self.state.questionGroups) {
      questionGroup = self.state.questionGroups.find( group => group.id == self.config.questionGroupId );
      if (questionGroup) {
        questionGroup.values = self.state.values || {};
        if (questionGroup && questionGroup.choices) {
          choices = questionGroup.choices;
        }
      }
    }

    let requireLogin = !!(self.state.choicesGuideConfig && self.state.choicesGuideConfig.requiredUserRole);

    let choicesHTML = null;
    if (choices) {
      choicesHTML = <OpenStadComponentChoices config={{ ...self.config.choices }} scores={{...self.state.scores}} choices={[...choices]} firstAnswerGiven={true} ref={function(el) { self.choicesElement = el; }} key='choices'/>;
    }

    let moreInfoHTML = null;
    if (self.config.moreInfoUrl && self.config.moreInfoLabel) {
      moreInfoHTML =
        <div className="osc-more-info-link">
          <a href={self.config.moreInfoUrl}>{self.config.moreInfoLabel}</a>
        </div>
    }

    let formHTML = null;
    let requireLoginHTML = null;
    let previousNextButtonsHTML = null;
    if (self.config.submission.type == 'form') {
      formHTML = (
        <OpenStadComponentForms.Form config={ self.config.submission.form } onChange={self.onFormChange} ref={function(el) { self.form = el; }}/>
      );

      if (requireLogin) {
        if (self.isUserLoggedIn()) {
          let className = 'osc-success';
          let buttonText = self.config.submission.requireLoginSettings.buttonTextLoggedIn;
          let message = self.config.submission.requireLoginSettings.loggedInMessage;
          if (self.state.submissionError) {
            className = 'osc-error';
            if (self.state.submissionError.type == 'alreadySubmitted') {
              buttonText = self.config.submission.requireLoginSettings.buttonTextAlreadySubmitted;
              message  = self.config.submission.requireLoginSettings.alreadySubmittedMessage;
            } else {
              message = self.state.submissionError.message;
            }
          }
          requireLoginHTML = (
            <div className={`osc-require-login osc-logged-in osc-logged-in ${className}`}>
              <h2>{self.config.submission.requireLoginSettings.title}</h2>
              <div className="osc-gray-block">
                <button onClick={e => document.location.href = self.config.loginUrl} className="osc-button osc-button-white">{buttonText}</button>
                <div className="change-login-link-text">
                  <a href={`javascript: document.location.href = '${self.config.loginUrl}'`}>{self.config.submission.requireLoginSettings.changeLoginLinkText}</a>
                </div>
                <div className="osc-message">
                  {message}
                </div>
              </div>
            </div>
          )
        } else {
          let className = '';
          let message = '';
          if (self.state.submissionError) {
            className = 'osc-error';
            message = self.state.submissionError.message;
          }
          requireLoginHTML = (
            <div className={`osc-require-login osc-not-yet-logged-in ${className}`}>
              <h2>{self.config.submission.requireLoginSettings.title}</h2>
              <div className="osc-gray-block">
                {self.config.submission.requireLoginSettings.description}<br/><br/>
                <button onClick={e => document.location.href = self.config.loginUrl} className="osc-button osc-button-white">{self.config.submission.requireLoginSettings.buttonTextLogin}</button>
                <div className="osc-message">
                  {message}
                </div>
              </div>
            </div>
          )
        }
      }

      let previousUrl = null; let previousAction = null; let previousLabel = null;

      if (self.config.beforeUrl) {
        previousUrl = self.config.beforeUrl;
        previousLabel = self.config.beforeLabel || 'Vorige'
      }

      let nextUrl = null;
      let nextAction = () => { self.submitResult(); }
      let nextLabel = self.config.afterLabel || 'Opslaan'

      let nextIsDisabled = ( self.config.submission.type == 'form' && self.form && !self.form.validate({}) ) || ( requireLogin && !self.isUserLoggedIn() );
      
      if ( previousLabel || nextLabel ) {
        previousNextButtonsHTML = <OpenStadComponentPreviousNextButtonBlock previousAction={previousAction} previousUrl={previousUrl} previousLabel={previousLabel} nextAction={nextAction} nextUrl={nextUrl} nextLabel={nextLabel} nextIsDisabled={nextIsDisabled}/>
      }

    }

    let errorMessageHTML = null;
    if (self.state.submissionError && !requireLogin) {
      errorMessageHTML = (
        <div className="osc-message osc-error">
          {self.state.submissionError.message};
        </div>);
    }
    
    return (
      <div className="osc-choices-guide">
        <div className="osc-result">
          <div className="osc-result-content">
            <div className={`osc-choices-container ${'osc-type-' + self.config.choices.type}`}>
              <h3 dangerouslySetInnerHTML={{ __html: self.state.title }}></h3>
              {choicesHTML}
            </div>
            {moreInfoHTML}
            {formHTML}
            {requireLoginHTML}
            {errorMessageHTML}
          </div>
        </div>
       {previousNextButtonsHTML}
      </div>
    );

  }

}
