import BallotCastValidator from "./BallotCastValidator";
import ContractAddressChangeValidator from "./ContractAddressChangeValidator";
import ThawValidator from "./ThawValidator";
import VoteValidator from "./VoteValidator";

function addSample(samples, validator) {
  samples.push({
    key: validator.actionCode,
    name: validator.actionName,
    json: validator.sample
  });
}

export function getSamples() {
  const samples = [];
  addSample(samples, new BallotCastValidator());
  addSample(samples, new ContractAddressChangeValidator());
  addSample(samples, new ThawValidator());
  addSample(samples, new VoteValidator());
  return samples;
}