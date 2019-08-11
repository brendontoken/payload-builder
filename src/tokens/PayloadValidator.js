import { ContractOffer, OpReturnMessage, Permission, Timestamp, Entity, PublicKeyHash, Vote, Establishment } from 'tokenized';
import { objectIfPresent, stringIfPresent } from './primitiveValidators';

class PayloadValidator {

  _addActionValidator = (actionValidator) => {
    this.actionValidators[actionValidator.Type()] = actionValidator
  }

  _assembleActionValidators = () => {
    this.actionValidators = {};
    this._addActionValidator(new Establishment());
    this._addActionValidator(new Vote());
  }

  constructor() {
    this._assembleActionValidators();
  }

  _validateHeader = (header) => {
    console.log('_validateHeader()');
    const version = header.version;
    if (!version) { throw new Error('"version" missing in header.'); }
    if (!Number.isInteger(version)) { throw new Error('version must be an integer.');}
    if (version < 0) { throw new Error('version must be positve.'); }

    const actionCode = stringIfPresent(header, 'header', 'actionCode');
    if (actionCode.length !== 2) { throw new Error('actionCode must be two characters.'); }
    if (!/[GEMCART]/.test(actionCode.slice(0, 1))) { throw new Error('The first character of actionCode must be one of: ACEGMRT.') }
    const actionNumber = Number.parseInt(actionCode.slice(1, 2));
    if (!Number.isFinite(actionNumber)) { throw new Error('The second character of actionCode must be a number.') }
    
    return {
      actionCode: actionCode,
      version: version
    }
  }

  validate = (spec) => {
    if (typeof spec !== 'object') { throw new Error('Must be a JSON object.'); }
    if (Array.isArray(spec)) { throw new Error('Cannot be an array, must be a JSON object.'); }
    const header = objectIfPresent(spec, 'top level', 'header');
    if (!header) { throw new Error('"header" missing.'); }
    const { version, actionCode } = this._validateHeader(header);

    const actionValidator = this.actionValidators[actionCode];
    if (!actionValidator) { throw new Error(`actionCode of "${actionCode}" not recognised.`) }

    const actionContents = objectIfPresent(spec, 'top level', 'actionContents');
    if (!actionContents) { throw new Error('"actionContents" missing.'); }

    const validationErrorMessage = actionValidator.parse(JSON.stringify(actionContents));
    if (validationErrorMessage) {
      throw new Error(`Validation failed. ${validationErrorMessage}`);
    }

    return actionValidator;
  }

}

export default PayloadValidator;