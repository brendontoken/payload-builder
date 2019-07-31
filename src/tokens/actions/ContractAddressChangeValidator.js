import ActionValidator from "./ActionValidator";
import { ContractAddressChange, PublicKeyHash, Timestamp } from "@tokenized/tokenized";
import { timestamp as timestampPrimitive } from "../primitiveTypes";

class ContractAddressChangeValidator extends ActionValidator {
  constructor() {
    super();
    this.actionCode = 'C5';
    this.publicKeyHashRegex = /[0-9a-fA-F]{40}/
  }

  _validateVersion1 = (actionContents) => {
    const newContractPkhText = actionContents.newContractPkh;
    if (!newContractPkhText) { throw new Error('"newContractPkh" is missing from the actionContents.');}
    if (!this.publicKeyHashRegex.test(newContractPkhText)) { throw new Error('newContractPkh must be 20 hex characters.'); }
    const newContractPkhBuffer = Buffer.from(newContractPkhText, 'hex');
    const newContractPkh = PublicKeyHash.fromBytes(newContractPkhBuffer);

    const timestampText = actionContents.timestamp;
    if (!timestampText) { throw new Error('"timestamp" is missing from the actionContents.'); }
    const milliseconds = Date.parse(timestampText);
    if (!milliseconds) { throw new Error('Failed to parse the timestamp. Try something like "04 Dec 1995 00:12:00 GMT".'); }
    console.log('milliseconds:   ', milliseconds);
    if (milliseconds < 0) { throw new Error('timestamp is too early.'); }
    console.log('max safe int 4n:', Number.MAX_SAFE_INTEGER / 1000)
    console.log('maxMilliseconds:', timestampPrimitive.maxMilliseconds);
    console.log('max safe int:   ', Number.MAX_SAFE_INTEGER);
    if (milliseconds > Number.MAX_SAFE_INTEGER) { throw new Error('timestamp is too late.'); };
    const timestamp = Timestamp.NewTimestamp(milliseconds);

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
        throw new Error(`version of ${version} in invalid.`);  
    }
  }
}

export default ContractAddressChangeValidator