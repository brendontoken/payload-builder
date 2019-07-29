import React, { Component } from 'react'

export class Payload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payload: props.payload
    }
  }

  render() {
    return (
      <div>
        <h3>Generated Payload</h3>
        <p>{this.props.payload}</p>
        <h4>Compact</h4>
        <h4>Expanded</h4>
      </div>
    )
  }
}

export default Payload
