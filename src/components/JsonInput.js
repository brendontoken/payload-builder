import React, { Component } from 'react'

export class JsonInput extends Component {

  onResetInput(e) {
    e.preventDefault();
    console.log('resetInput');
  }


  render() {
    return (
      <div>
        JSON Input
        <input></input>
        <button onClick={this.onResetInput}>
          Reset
        </button>
      </div>
    )
  }
}

export default JsonInput