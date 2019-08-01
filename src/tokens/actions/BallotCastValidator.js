import ActionValidator from './ActionValidator';
import { BallotCast } from '@tokenized/tokenized';
import { varchar } from '../primitiveTypes';
import { stringIfPresent, txIdIfPresent } from '../primitiveValidators';



class BallotCastValidator extends ActionValidator {
  constructor() {
    super();
    this.actionCode = 'G3';
    this.actionName = 'Ballot Cast';
    this.txIdRegex = /[0-9a-fA-F]{64}/;
    this.sample = `{
      "header": {
        "version": 1,
        "actionCode": "G3"
      },
      "actionContents": {
       "voteTxId":"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20",
    "vote":"A"
      }
    }`;
  }

  _validateVersion1 = (actionContents) => {
    console.log('BallotCastVaidator.validate()');
    const voteTxId = txIdIfPresent(actionContents, 'actionContents', 'voteTxId');

    const vote = stringIfPresent(actionContents, 'actionContents', 'vote');
    const voteBuf = Buffer.from(vote, 'utf8');
    const maxLength = varchar.maxLengthFor8Bits;
    if (voteBuf.length > maxLength) { throw new Error(`Byte representation of vote exceeds maximum length of ${maxLength}.`); }

    const action = new BallotCast();
    action.vote_tx_id = voteTxId;
    action.vote = vote;

    console.log('BallotCast:', action);
    console.log('BallotCast.Serialize():', action.Serialize().toString('hex'));
    console.log('BallotCast.toString():', action.toString());

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

export default BallotCastValidator