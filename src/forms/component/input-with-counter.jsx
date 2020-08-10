import merge from 'merge';
import React from 'react';
import ReactDOM from 'react-dom';
//import CKEditor from '@ckeditor/ckeditor5-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import HTMLArea from './htmlarea.jsx';

'use strict';

export default class FormfieldInputWithCounter extends React.Component {

  constructor(props) {
    super(props);

		let self = this;
		self.id = props.id || 'osc-formfields-plaintext-with-counter-' + parseInt( 1000000 * Math.random() )

		self.defaultConfig = {
			name: 'tekst',
			inputType: 'input',
			minLength: 5,
			maxLength: 10,
      placeholder: '',
		};
		self.config = merge.recursive(self.defaultConfig, self.config, props.config || {})

    self.state = {
			focused: false,
      value: props.value || '',
			valueLength: props.value && props.value.length || 0,
		};

    self.key = props.useKey || ( self.id || 'osc-input-with-counter-' ) + parseInt( 10000000 * Math.random );

    this.onChange = props.onChange;

    self.handleOnChange = self.handleOnChange.bind(this)

  }

	isValid() {
		let state = {};
		state.isValid = true;
		state.warning = null;
		if (this.state.valueLength < this.config.minLength) {
			state.warning = `Je tekst is te kort`;
			state.isValid = false;
		}
		if (this.state.valueLength > this.config.maxLength) {
			state.warning = `Je tekst is te lang`;
			state.isValid = false;
		}
		this.setState(state)
		return state.isValid;
  }

	validate() {
		this.setState({ showWarning: true })
		return this.isValid();
	}
  
	handleOnChange(data) {
    data = data || {};
		this.setState(data)
		if (typeof this.onChange == 'function') {
			this.onChange({ name: this.config.name, value: data.value });
		}
	}

	onInputFocus() {
		let state = {};
		state.focused = true;
		state.showWarning = false;
		this.setState(state)
	}

	onInputBlur() {
		let state = {};
		state.focused = false;
		this.setState(state)
	}

	onInputKeyUp(value) {
		let state = {};
		state.value = value || this.input.value;
		let valueLength = state.value.length;
		state.valueLength = valueLength;
		state.isValid = valueLength >= this.config.minLength && valueLength <= this.config.maxLength;
		this.setState(state)
	}

	render() {

		let self = this;

		let counter = null;
		let warning = null;
		if (self.state.focused) {
			if (self.state.valueLength < self.config.minLength) {
				counter = (<div className="osc-form-counter osc-form-error">Nog minimaal <span className="">{self.config.minLength - self.state.valueLength}</span> tekens</div>)
			} else {
				let error = self.state.valueLength > self.config.maxLength ? 'osc-form-error' : '';
				counter = (<div className={'osc-form-counter ' + error}>Je hebt nog <span className="">{self.config.maxLength - self.state.valueLength}</span> tekens over.</div>)
			}
		}

		if (self.state.showWarning && self.state.warning) {
			warning = (<div className="osc-form-warning" ref={ el => this['form-warning'] = el  }>{self.state.warning}</div>)
		}

    let inputHTML = null;

    switch(self.config.inputType) {
        
      case 'htmlarea':
        inputHTML = (
          <HTMLArea
            value={this.state.value}
            onChange={self.handleOnChange}
            onFocus={e => self.onInputFocus(e)}
            onBlur={e => self.onInputBlur(e)}
            onKeyUp={e => self.onInputKeyUp(e)}
          />
        );
        // inputHTML = (
        //   <CKEditor
        //     editor={ ClassicEditor }
        //     config={{ toolbar: [ 'h3', 'bold', 'italic', 'link' ] }}
        //     data={this.state.value}
        //     onInit={ editor => {
        //       // TODO: betere selector
        //       document.querySelector('.ck-content').addEventListener('keyup', function(e) {
        //         self.onInputKeyUp(e, editor.getData())
        //       })
        //     }}
        //     onChange={( event, editor ) => self.handleOnChange({ value: editor.getData() })}
        //     onFocus={e => self.onInputFocus(e)}
        //     onBlur={e => self.onInputBlur(e)}
        //   />
        // );
        break;
        
      case 'textarea':
        inputHTML = (
				  <textarea key={self.key} ref={el => (self.input = el)} value={this.state.value} disabled={this.props.disabled} placeholder={this.config.placeholder} onChange={e => self.handleOnChange({ value: self.input.value })} onKeyUp={e => self.onInputKeyUp()} onFocus={e => self.onInputFocus(e)} onBlur={e => self.onInputBlur(e)}></textarea>
        );
        break;

      case 'input':
      default:
        inputHTML = (
				  <input key={self.key} ref={el => (self.input = el)} value={this.state.value} disabled={this.props.disabled} placeholder={this.config.placeholder} onChange={e => self.handleOnChange({ value: self.input.value })} onKeyUp={e => self.onInputKeyUp()} onFocus={e => self.onInputFocus(e)} onBlur={e => self.onInputBlur(e)}></input>
        );

    }
		
    return (
			<div id={self.id} ref={el => (self.instance = el)} className="osc-input-with-counter">
				<div className="osc-form-feedback">
					{inputHTML}
					{counter}
					{warning}
				</div>
			</div>
    );

  }

}
