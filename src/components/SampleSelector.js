import React, { Component } from 'react';
import { getSamples } from '../tokens/actions/SampleJson';

export class SampleSelector extends Component {

  handleSampleSelection = (event) => {
    const sampleKey = event.target.value;
    console.log('Sample selection key:', sampleKey);
    const sample = this.samples[sampleKey];
    this.props.onSelectionChange(sample);
  }

  constructor(props) {
    super(props);

    const sampleArray = getSamples();
    console.log('Sorting...');
    sampleArray.sort((a, b) => {
      if (a.actionCode < b.actionCode) {
        return -1;
      }
      if (a.actionCode > b.actionCode) {
        return 1;
      }

      // must be equal
      return 0;
    });
    this.options = sampleArray.map((sample) => {
      return <option key={sample.actionCode} value={sample.actionCode}>{sample.actionCode} - {sample.actionName}</option>
    });

    const samples = {};
    sampleArray.forEach((sample) => {
      samples[sample.actionCode] = sample;
    });
    this.samples = samples;

    this.props.onSelectionChange(sampleArray[0]);
  }

  render() {

    return (
      <div>
        <select onChange={this.handleSampleSelection}>
          {this.options}
        </select>
        
      </div>
    )
  }
}

export default SampleSelector
