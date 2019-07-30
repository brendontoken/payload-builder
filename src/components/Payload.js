import React, { Component } from 'react'

export class Payload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payload: props.payload
    }

    this.serializedStyle = {
      fontFamily: 'monospace',
      fontSize: '12px'
    };
  }

  render() {
    let serialized = 'Not serialized.';
    const payload = this.props.payload;
    if (payload) {
      console.log('To display:', payload);
      serialized = payload.Serialize().toString('hex');
    }

    return (
      <div>
        <h3>Generated Payload</h3>
        <h4>Compact</h4>
        <p style={this.serializedStyle}>{serialized}</p>
        <h4>Expanded</h4>
      </div>
    )
  }
}

export default Payload
