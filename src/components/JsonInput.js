import React, { Component } from 'react'

export class JsonInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isValid: true
    }

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
  }

  handleReset = (e) => {
    e.preventDefault();
    console.log('resetInput');
    this.setState({ inputValue: '' });
  }

  render() {
    return (
      <div>
        <div>
          <input 
            onChange={this.handleInputChange}
            value={this.state.inputValue} 
            style={this.state.isValid ? { } : { border: 'solid 2px red'}}>
          </input>
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