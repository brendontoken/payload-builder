import BallotCastValidator from "./BallotCastValidator";
import ContractAddressChangeValidator from "./ContractAddressChangeValidator";
import ThawValidator from "./ThawValidator";
import VoteValidator from "./VoteValidator";

function addSample(samples, validator) {
  samples.push({
    actionCode: validator.actionCode,
    actionName: validator.actionName,
    json: validator.sample
  });
}

export function getSamples() {
  const samples = [];
  addSample(samples, new BallotCastValidator());
  addSample(samples, new ContractAddressChangeValidator());
  addSample(samples, new VoteValidator());
  addSample(samples, new ThawValidator());
  
  return samples;
}