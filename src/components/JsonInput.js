import React, { Component } from 'react'

const defaultInput = '{}';

export class JsonInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: defaultInput,
      isValid: true
    }
  }

  handleInputChange = (e) => {
    const text = e.target.value;
    this.setState({ inputValue: text });
    console.log(`onInputChanged "${text}"`);
    this.props.onPayloadChange(text);
    let parsed;
    try {
      parsed = JSON.parse(text);
      this.setState({ isValid: true });
    } catch(e) {
      this.setState({ isValid: false });
      return;
    }

    
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
            rows={5}
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