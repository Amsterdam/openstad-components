'use strict';

import OpenStadComponentDefaultInput from './default-input.jsx';

export default class OpenStadComponentTextArea extends OpenStadComponentDefaultInput {

	render() {

		let self = this;

    let errorHTML = null;
    if (self.state.error) {
      errorHTML = (<div className="osc-form-error osc-form-field-error">Je hebt nog niets ingevuld</div>)
    }
    
    return (
			<div className="osc-textarea">
			  <textarea value={this.state.value} disabled={this.props.disabled} placeholder={this.config.placeholder} onChange={e => self.handleOnChange({ value: self.input.value })} ref={el => (self.input = el)}>{this.state.value}</textarea>
        {errorHTML}
		  </div>
    );

  }

}
