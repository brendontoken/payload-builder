import ActionValidator from './ActionValidator';
import { Vote } from 'tokenized';
import { timestampIfPresent } from '../primitiveValidators';



class VoteValidator extends ActionValidator {
  constructor() {
    super();
    this.actionCode = 'G2';
    this.actionName = 'Vote';
    this.sample = `{
  "header": {
    "version": 1,
    "actionCode": "G2"
  },
  "actionContents": {
    "timestamp":"04 Dec 2019 00:12:00 GMT"
  }
}`;
  }

  _validateVersion1 = (actionContents) => {
    const timestamp = timestampIfPresent(actionContents, 'actionContents', 'timestamp');
    const action = new Vote();
    action.timestamp = timestamp;

    console.log('Vote:', action);
    console.log('VotetoString():', action.toString());

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

export default VoteValidator