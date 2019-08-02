import ActionValidator from "./ActionValidator";
import { Establishment } from "tokenized";
import { varcharIfPresent } from "../primitiveValidators";

class EstablishmentValidator extends ActionValidator {
  constructor() {
    super();
    this.actionCode = 'R1';
    this.actionName = 'Establishment';
    this.sample = `{
  "header": {
    "version": 1,
    "actionCode": "R1"
  },
  "actionContents": {
    "message": "A custom message to include with this action."
  }
}`;
  }

  _validateVersion1 = (actionContents) => {
    const message = varcharIfPresent(actionContents, 'actionContents', 'message', 4);

    const action = new Establishment();
    action.message = message;

    console.log('Establishment:', action);
    console.log('Establishment:', action.toString());

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

export default EstablishmentValidator