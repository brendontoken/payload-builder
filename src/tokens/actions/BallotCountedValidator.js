import ActionValidator from './ActionValidator';
import { BallotCounted } from 'tokenized';
import { bigNumberUint64IfPresent, timestampIfPresent, txIdIfPresent, varcharIfPresent } from '../primitiveValidators';


class BallotCountedValidator extends ActionValidator {
  constructor() {
    super();
    this.actionCode = 'G4';
    this.actionName = 'Ballot Counted';
    this.sample = `{
  "header": {
    "version": 1,
    "actionCode": "G4"
  },
  "actionContents": {
    "voteTxId":"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20",
    "vote":"A",
    "quantity":"3",
    "timestamp":"04 Dec 2019 00:12:00 GMT"
  }
}`;
  }

  _validateVersion1 = (actionContents) => {
    const voteTxId = txIdIfPresent(actionContents, 'actionContents', 'voteTxId');
    const vote = varcharIfPresent(actionContents, 'actionContents', 'vote', 8);
    const quantity = bigNumberUint64IfPresent(actionContents, 'actionContents', 'quantity');
    const timestamp = timestampIfPresent(actionContents, 'actionContents', 'timestamp');

    const action = new BallotCounted();
    action.vote_tx_id = voteTxId;
    action.vote = vote;
    action.quantity = quantity;
    action.timestamp = timestamp;

    console.log('BallotCounted:', action);
    console.log('BallotCounted.toString():', action.toString());

    return action;
  }

  validate = (actionContents, version) => {
    switch (version) {
      case 1:
        return this._validateVersion1(actionContents);
      default:
        throw new Error(`version of ${version} is invalid.`);  
    }
  }
}

export default BallotCountedValidator