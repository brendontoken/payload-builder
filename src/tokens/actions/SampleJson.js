import BallotCastValidator from './BallotCastValidator';
import BallotCountedValidator from './BallotCountedValidator';
import ContractAddressChangeValidator from './ContractAddressChangeValidator';
import EstablishmentValidator from './EstablishmentValidator';
import ThawValidator from './ThawValidator';
import VoteValidator from './VoteValidator';
import samples from './samples';

let samplesOrderedByActionCode = null;

function addSample(samples, validator) {
  samples.push({
    actionCode: validator.actionCode,
    actionName: validator.actionName,
    json: validator.sample
  });
}

export function getSamplesOrderedByActionCode() {

  samples.sort((a, b) => {
    if (a.actionCode < b.actionCode) {
      return -1;
    }
    if (a.actionCode > b.actionCode) {
      return 1;
    }

    // must be equal
    return 0;
  });

  return samples;
}

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