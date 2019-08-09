import BallotCastValidator from './BallotCastValidator';
//import samples from './samples';
import generatedSamples from './action_examples.json';

/*
let samplesOrderedByActionCode = null;

function addSample(samples, validator) {
  samples.push({
    actionCode: validator.actionCode,
    actionName: validator.actionName,
    json: validator.sample
  });
}
*/
export function getSamplesOrderedByActionCode() {

  generatedSamples.sort((a, b) => {
    if (a.actionCode < b.actionCode) {
      return -1;
    }
    if (a.actionCode > b.actionCode) {
      return 1;
    }

    // must be equal
    return 0;
  });

  return generatedSamples;
}

/*
export function getSamples() {
  const samples = [];
  addSample(samples, new BallotCastValidator());
  addSample(samples, new BallotCountedValidator());
  addSample(samples, new ContractAddressChangeValidator());
  addSample(samples, new EstablishmentValidator());
  addSample(samples, new VoteValidator());
  addSample(samples, new ThawValidator());
  
  return samples;
}
*/