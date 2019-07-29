import React from 'react'

import JsonInput from './JsonInput';
import Payload from './Payload';

export class PayloadTransformer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payload: null
    };
  }

  handlePayloadChange = (payload) => {
    console.log('handlePayloadChange():', payload);
    this.setState({ payload: payload});
  }

  render() {
    return (
      <div>
        <JsonInput onPayloadChange={this.handlePayloadChange}/>
        <Payload payload={this.state.payload}/>
      </div>
    )
  }
}

export default PayloadTransformer
