import React, { Component } from 'react'
import PayloadValidator from '../tokens/PayloadValidator';

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
      validationErrorMessage: ''
    }

    this.validator = new PayloadValidator();
  }

  componentDidMount = () => {
    this.resetInput();
  }

  handleInputChange = (e) => {
    const text = e.target.value;
    this.setState({ inputValue: text });
    console.log(`onInputChanged "${text}"`);
    let parsed;
    try {
      parsed = JSON.parse(text);
      this.setState({ isValid: true });
    } catch(e) {
      this.setState({ 
        isValid: false,
        validationErrorMessage: 'Not valid JSON.'
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

  handleReset = (e) => {
    e.preventDefault();
    console.log('resetInput');
    this.resetInput();
  }

  resetInput = () => {
    const newText = defaultInput;
    this.setState({ inputValue: newText });
    this.props.onPayloadChange(null);
  }
  
  render() {
    return (
      <div>
        <div>
          <h3>Specify Payload Parameters</h3>
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