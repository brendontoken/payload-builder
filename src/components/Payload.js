import React, { Component } from 'react';
import { OpReturnMessage } from 'tokenized';

export class Payload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payload: props.payload,
      selectedContentComponents: 'actionContentsOnly'
    }

    this.serializedStyle = {
      fontFamily: 'monospace',
      fontSize: '12px'
    };
  }

  handleContentComponentSelectionChange = (event) => {
    this.setState({
      selectedContentComponents: event.target.value
    });
  }

  render() {
    let serialized = 'Not serialized.';
    const payload = this.props.payload;
    if (payload) {
      console.log('To display:', payload);

      let serializedBuffer;
      if (this.state.selectedContentComponents === 'wholeOutput') {
        const isTest = false;
        try {
          serializedBuffer = OpReturnMessage.Serialize(payload, isTest);
        } catch (e) {
          serialized = 'Serialization failed.';
          console.error('Serialization failed.', e);
        }
      } else {
        try {
          serializedBuffer = payload.Serialize();
        } catch (e) {
          serialized = 'Serialization failed.';
          console.error('Serialization failed.', e);
        }
      }
      
      if (serializedBuffer) {
        serialized = serializedBuffer.toString('hex');
      }
    }

    return (
      <div>
        <h3>Generated Payload</h3>

        <div>
          <label>
            <input
              type="radio"
              name="content-components"
              value="actionContentsOnly"
              checked={this.state.selectedContentComponents === "actionContentsOnly"}
              onChange={this.handleContentComponentSelectionChange}
            />
            Action Contents Only
            </label>
          </div>

          <div>
            <label>
              <input
                type="radio"
                name="content-components"
                value="wholeOutput"
                checked={this.state.selectedContentComponents === "wholeOutput"}
                onChange={this.handleContentComponentSelectionChange}
              />
              Whole Output
            </label>
          </div>   
        <p style={this.serializedStyle}>{serialized}</p>
      </div>
    )
  }
}

export default Payload
