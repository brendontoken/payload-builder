import ActionValidator from "./ActionValidator";
import { BallotCast, TxId } from "@tokenized/tokenized";
import { varchar } from "../primitiveTypes";
import { stringIfPresent } from "../primitiveValidators";



class BallotCastValidator extends ActionValidator {
  constructor() {
    super();
    this.actionCode = 'G3';
    this.txIdRegex = /[0-9a-fA-F]{64}/
  }

  _validateVersion1 = (actionContents) => {
    console.log('BallotCastVaidator.validate()');
    const voteTxId = stringIfPresent(actionContents, 'actionContents', 'voteTxId');
    if (!voteTxId) { throw new Error('"voteTxId" is missing in the actionContents.'); }
    if (!this.txIdRegex.test(voteTxId)) { throw new Error('voteTxId must be 64 hex characters.'); }

    const vote = stringIfPresent(actionContents, 'actionContents', 'vote');
    const voteBuf = Buffer.from(vote, 'utf8');
    const maxLength = varchar.maxLengthFor8Bits;
    if (voteBuf.length > maxLength) { throw new Error(`Byte representation of vote exceeds maximum length of ${maxLength}.`); }
    
    const txIdObject = new TxId();
    txIdObject.UnmarshalJSON(voteTxId);

    const action = new BallotCast();
    action.vote_tx_id = txIdObject;
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
        throw new Error(`version of ${version} in invalid.`);  
    }
  }
}

export default BallotCastValidator