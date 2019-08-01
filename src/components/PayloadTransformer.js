import React from 'react'

import JsonInput from './JsonInput';
import Payload from './Payload';

export class PayloadTransformer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePayloadChange = (payload) => {
    console.log('handlePayloadChange():', payload);
    this.setState({ payload: payload});
  }

  render() {
    return (
      <div>
        <h3>Specify Payload Parameters</h3>
        <JsonInput onPayloadChange={this.handlePayloadChange}/>
        <Payload payload={this.state.payload}/>
      </div>
    )
  }
}

export default PayloadTransformer
