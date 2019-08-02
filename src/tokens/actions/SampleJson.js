import BallotCastValidator from "./BallotCastValidator";
import BallotCountedValidator from "./BallotCountedValidator";
import ContractAddressChangeValidator from "./ContractAddressChangeValidator";
import EstablishmentValidator from "./EstablishmentValidator";
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
  addSample(samples, new BallotCountedValidator());
  addSample(samples, new ContractAddressChangeValidator());
  addSample(samples, new EstablishmentValidator());
  addSample(samples, new VoteValidator());
  addSample(samples, new ThawValidator());
  
  return samples;
}