import React, { Component } from 'react'

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
      isValid: true
    }
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
      this.setState({ isValid: false });
      return;
    }

    this.props.onPayloadChange(text);
  }

  handleReset = (e) => {
    e.preventDefault();
    console.log('resetInput');
    this.resetInput();
  }

  resetInput = () => {
    const newText = defaultInput;
    this.setState({ inputValue: newText });
    this.props.onPayloadChange(newText);
  }
  
  render() {
    return (
      <div>
        <div>
          <h3>Specify Payload Parameters</h3>
          <textarea 
            onChange={this.handleInputChange}
            value={this.state.inputValue} 
            rows={9}
            style={this.state.isValid ? { } : { border: 'solid 2px red'}}>
          </textarea>
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