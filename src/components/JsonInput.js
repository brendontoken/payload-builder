import React, { Component } from 'react'
import PayloadValidator from '../tokens/PayloadValidator';
import SampleSelector from './SampleSelector';

const defaultInput = `{
  "header": {
    "version": 1,
    "actionCode": "A1"
  },
  "actionContents": {

  }
}`;

export class JsonInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: defaultInput,
      isValid: true,
      lastSampleSelected: '',
      validationErrorMessage: ''
    }

    this.validator = new PayloadValidator();
  }

  handleInputChange = (e) => {
    const text = e.target.value;
    console.log(`onInputChanged "${text}"`);
    this.newInput(text);
  }

  handleReset = (e) => {
    e.preventDefault();
    console.log('resetInput');
    this.resetInput();
  }

  handleSampleSelectionChange = (sample) => {
    this.setState({lastSampleSelected: sample});
    const text = sample.json;
    console.log('Sample text:', text);
    this.newInput(text);
  }

  newInput = (text) => {
    this.setState({ inputValue: text });
    let parsed;
    try {
      parsed = JSON.parse(text);
      this.setState({ isValid: true });
    } catch(e) {
      this.setState({ 
        isValid: false,
        validationErrorMessage: `Must be valid JSON. ${e.message}.`
       });
      return;
    }

    let action;
    try {
      action = this.validator.validate(parsed);
      this.setState({ validationErrorMessage: ''});
    } catch (e) {
      console.log('Payload validation error:', e);
      const errorMessage = e.message || 'Unknown error.';
      this.setState({ validationErrorMessage: errorMessage });
    }

    this.props.onPayloadChange(action);
  }

  resetInput = () => {
    const newText = this.state.lastSampleSelected.json;
    this.newInput(newText);
  }
  
  render() {
    return (
      <div>
        <div>
          <SampleSelector onSelectionChange={this.handleSampleSelectionChange}/>
          <textarea 
            cols={70} // 64 for txid hex, plus a bit
            onChange={this.handleInputChange}
            value={this.state.inputValue} 
            rows={10}
            style={this.state.isValid ? { } : { border: 'solid 2px red'}}>
          </textarea>
        </div>
        <div>
          {this.state.validationErrorMessage}
        </div>
        <div>
          <button onClick={this.handleReset}>
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default JsonInput