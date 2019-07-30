import { ContractOffer, OpReturnMessage, Permission, Timestamp, Entity, PublicKeyHash } from '@tokenized/tokenized';
import BallotCastValidator from './actions/BallotCastValidator';

class PayloadValidator {

  _addActionValidator = (actionValidator) => {
    this.actionValidators[actionValidator.actionCode] = actionValidator
  }

  _assembleActionValidators = () => {
    this.actionValidators = {};
    this._addActionValidator(new BallotCastValidator());
  }

  constructor() {
    this._assembleActionValidators();
  }

  _testPackage = () => {
    console.log('_testPackage()');
    let voteSystemsAllowed = [ true, true ];

    let permission = new Permission();
    permission.permitted = true;
    permission.administration_proposal = true;
    permission.holder_proposal = false;
    permission.voting_systems_allowed = voteSystemsAllowed;

    // Note: Permissions can be different for each field.
	  let permissions = [...Array(20)].map(_ => permission);

    // Serialize auth flags
    let authFlags = Permission.WriteAuthFlags(permissions);

    // Generate a new contract offer action
    let action = new ContractOffer();
    action.contract_name = 'Test';
    action.body_of_agreement_type = 2;
    action.body_of_agreement = [...Buffer.from('<contract agreement>', 'ascii')];
    action.contract_type = 'Test Type';
    action.contract_auth_flags = authFlags;
    action.supporting_docs = [];
    action.contract_expiration = new Timestamp();
    action.issuer = new Entity();
    action.voting_systems = [];
    action.oracles = [];
    action.master_pkh = new PublicKeyHash();
    // Specify any other fields necessary
    // ...

    // Serialize action
    let isTest = true; // use "test.tokenized" OP_RETURN signature
    let actionData = OpReturnMessage.Serialize(action, isTest);

    // Convert to hex
    console.log("Contract Offer Hex :\n", actionData);

    // Output as human readable string
    console.log("Contract Offer text :\n", JSON.stringify(action));

  }

  _validateHeader = (header) => {
    console.log('_validateHeader()');
    const version = header.version;
    if (!version) { throw new Error('"version" missing in header.'); }
    if (!Number.isInteger(version)) { throw new Error('version must be an integer.');}
    if (version < 0) { throw new Error('version must be positve.'); }

    const actionCode = header.actionCode;
    if (!actionCode) { throw new Error('"actionCode" missing in header.'); }
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
    const header = spec.header;
    if (!header) { throw new Error('"header" missing.'); }
    const { version, actionCode } = this._validateHeader(header);

    const actionValidator = this.actionValidators[actionCode];
    if (!actionValidator) { throw new Error(`actionCode of "${actionCode}" not recognised.`) }

    const actionContents = spec.actionContents;
    if (!actionContents) { throw new Error('"actionContents" missing.'); }

    return actionValidator.validate(actionContents, version);

    //this._testPackage();
  }

}

export default PayloadValidator;