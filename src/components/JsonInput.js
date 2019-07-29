import React, { Component } from 'react'

export class JsonInput extends Component {

  onInputChanged(e) {
    console.log('onInputChanged');
  }

  onResetInput(e) {
    e.preventDefault();
    console.log('resetInput');
  }


  render() {
    return (
      <div>
        <div>
          <input onInput={this.onInputChanged}></input>
        </div>
        <div>
          <button onClick={this.onResetInput}>
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default JsonInput