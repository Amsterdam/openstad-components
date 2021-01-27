import merge from 'merge';
import fingerprint from 'fingerprintjs2';

import OpenStadComponentLibs from '../../libs/index.jsx';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentChoices from './choices.jsx';
import OpenStadComponentChoicePlane from './choice-plane.jsx';

import OpenStadComponentForms from '../../forms/index.jsx';
import OpenStadComponentPreviousNextButtonBlock from '../../previous-next-button-block/index.jsx';

import fetchChoicesGuide from '../lib/fetch.js'

'use strict';

export default class OpenStadComponentChoicesGuideResult extends OpenStadComponent {

  constructor(props) {

    super(props);

    this.defaultConfig = {
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
    };
		this.config = merge.recursive(this.defaultConfig, this.config, props.config || {})
    this.config.loginUrl = this.config.loginUrl || '/oauth/login?returnTo=' + encodeURIComponent(document.location.href);

    let allValues = OpenStadComponentLibs.sessionStorage.get('osc-choices-guide.values') || {};
    let allScores = OpenStadComponentLibs.sessionStorage.get('osc-choices-guide.scores') || {};
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
    let scores = self.choicesElement && self.choicesElement.calculateScores(self.state.answers);

    let choicesTitle = '';
    let name;
    let preferredChoiceId = -1;
    if ( self.choicesElement ) {
      let choiceElement = self.choicesElement.getPreferedChoice();
      
      if (choiceElement) {
        name = choiceElement.getTitle(self.state.scores[choiceElement.config.divId], true);
        if (name) {
          choicesTitle = self.config.choices.title.preference.replace('\{preferredChoice\}', name);
          preferredChoiceId = choiceElement.divId
        } else {
          choicesTitle = self.config.choices.title.noPreferenceYet;
        }
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
    if (self.config.submission.type == 'form') {
      formValues = self.form.getValues();
      let isValid = self.form.validate({ showErrors: true });
      if (!isValid) return;
    }

    // return self.setState({
    //   'submissionError': {
    //     type: 'alreadySubmitted',
    //     message: 'Niels is gek',
    //   }
    // })

    fingerprint.get(fingerprintComponents => {

      let fingerprintData;
      try {
        fingerprintData = JSON.stringify(fingerprintComponents);
      } catch (err) {}
      
      let url = `${self.config.api && self.config.api.url }/api/site/${  self.config.siteId  }/choicesguide/${  self.config.choicesGuideId  }/result`;
      let headers = OpenStadComponentLibs.api.getHeaders(self.config);
      let body = {
        result: {
          answers: self.state.answers,
          scores: self.state.scores,
        },
        extraData: formValues,
        userFingerprint: btoa(fingerprintData),
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
                message,
                type: message == 'Je hebt je mening al ingestuurd' ? 'alreadySubmitted' : 'unknown'
              }
            }, () => {
              return console.log(messages);
            });
          });
        });

    })

  }

  isUserLoggedIn() {
    return this.config.user && this.config.user.role && this.config.user.role != 'anonymous';
  }

  render() {

    let self = this;
    let data = self.props && self.props.data || {};

    let choices = self.state.choices;
    let answerDimensions = 1;
    let questionGroup;
    if (self.state.questionGroups) {
      questionGroup = self.state.questionGroups.find( group => group.id == self.config.questionGroupId );
      if (questionGroup) {
        questionGroup.values = self.state.values || {};
        if (questionGroup && questionGroup.choices) {
          choices = questionGroup.choices;
          answerDimensions = questionGroup.answerDimensions;
        }
      }
    }

    let requireLogin = !!(self.state.choicesGuideConfig && self.state.choicesGuideConfig.requiredUserRole);

    let choicesHTML = null;
    if (choices) {

      switch (self.config.choices.type) {

        case 'plane':
          let images = choices && choices[0] && choices[0].images;
          if ( images && images.length > 1 ) { choices[0].images = choices && choices[0] && choices[0].images[1]; }
          choicesHTML = <OpenStadComponentChoices config={{ ...self.config.choices, sticky: false, size: 630, }} scores={self.state.scores} answerDimensions={answerDimensions} scores={{...self.state.scores}} choices={[...choices]} firstAnswerGiven={true} ref={function(el) { self.choicesElement = el; }} key='choices'/>;
          break;

        default:
          choicesHTML = <OpenStadComponentChoices config={{ ...self.config.choices, sticky: false, size: 630 }} scores={self.state.scores} answerDimensions={answerDimensions} scores={{...self.state.scores}} choices={[...choices]} firstAnswerGiven={true} ref={function(el) { self.choicesElement = el; }} key='choices'/>;

      }
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
        <OpenStadComponentForms.Form config={ self.config.submission.form }  ref={function(el) { self.form = el; }}/>
      );

      console.log(1);
      if (requireLogin) {
      console.log(2);
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
          requireLoginHTML = (
            <div className="osc-require-login osc-not-yet-logged-in">
              <h2>{self.config.submission.requireLoginSettings.title}</h2>
              <div className="osc-gray-block">
                {self.config.submission.requireLoginSettings.description}<br/><br/>
                <button onClick={e => document.location.href = self.config.loginUrl} className="osc-button osc-button-white">{self.config.submission.requireLoginSettings.buttonTextLogin}</button>
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

      let nextIsDisabled = requireLogin && !self.isUserLoggedIn();
      
      if ( previousLabel || nextLabel ) {
        previousNextButtonsHTML = <OpenStadComponentPreviousNextButtonBlock previousAction={previousAction} previousUrl={previousUrl} previousLabel={previousLabel} nextAction={nextAction} nextUrl={nextUrl} nextLabel={nextLabel} nextIsDisabled={nextIsDisabled}/>
      }

    }

    let errorMessageHTML = null;
    if (self.state.submissionError && !requireLogin) {
      errorMessageHTML = (
        <div className="osc-message">
          {self.config.submission.submissionError.message};
        </div>);
    }
    
    return (
      <div className="osc-choices-guide">
        <div className="osc-result">
          <div className="osc-result-content">
            <div className="osc-choices-container">
              <h2 dangerouslySetInnerHTML={{ __html: self.state.title }}></h2>
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
