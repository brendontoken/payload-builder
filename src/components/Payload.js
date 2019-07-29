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
      </div>
    )
  }
}

export default Payload
