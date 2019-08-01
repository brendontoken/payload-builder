import ActionValidator from "./ActionValidator";
import { Thaw } from "tokenized";
import { txIdIfPresent, timestampIfPresent } from "../primitiveValidators";

class ThawValidator extends ActionValidator {
  constructor() {
    super();
    this.actionCode = 'E3';
    this.actionName = 'Thaw';
    this.sample = `{
      "header": {
        "version": 1,
        "actionCode": "E3"
      },
      "actionContents": {
    "freezeTxId": "1212121212121212121212121212121212121212121212121212121212121212",
    "timestamp":"04 Dec 2019 00:12:00 GMT"
      }
    }`;
  }

  _validateVersion1 = (actionContents) => {
    const freezeTxId = txIdIfPresent(actionContents, 'actionContents', 'freezeTxId');
    const timestamp = timestampIfPresent(actionContents, 'actionContents', 'timestamp');

    const action = new Thaw();
    action.freeze_tx_id = freezeTxId;
    action.timestamp = timestamp;

    console.log('Thaw:', action);
    console.log('Thaw:', action.toString());

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

export default ThawValidator