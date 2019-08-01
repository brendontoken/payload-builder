import ActionValidator from "./ActionValidator";
import { ContractAddressChange, PublicKeyHash, Timestamp } from "tokenized";
import { timestampIfPresent } from "../primitiveValidators";

class ContractAddressChangeValidator extends ActionValidator {
  constructor() {
    super();
    this.actionCode = 'C5';
    this.actionName = 'Contract Address Change';
    this.publicKeyHashRegex = /[0-9a-fA-F]{40}/
    this.sample = `{
      "header": {
          "version": 1,
          "actionCode": "C5"
        },
        "actionContents": {
         "newContractPkh": "0102030405060708091011121314151617181920",
          "timestamp": "04 Dec 2019 00:12:00 GMT"
        }
      }`;
  }

  _validateVersion1 = (actionContents) => {
    const newContractPkhText = actionContents.newContractPkh;
    if (!newContractPkhText) { throw new Error('"newContractPkh" is missing from the actionContents.');}
    if (!this.publicKeyHashRegex.test(newContractPkhText)) { throw new Error('newContractPkh must be 20 hex characters.'); }
    const newContractPkhBuffer = Buffer.from(newContractPkhText, 'hex');
    const newContractPkh = PublicKeyHash.fromBytes(newContractPkhBuffer);

    const timestamp = timestampIfPresent(actionContents, 'actionContents', 'timestamp');

    const action = new ContractAddressChange();
    action.new_contract_pkh = newContractPkh;
    action.timestamp = timestamp;

    console.log('ContractAddressChange:', action);
    console.log('ContractAddressChange:', action);

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

export default ContractAddressChangeValidator