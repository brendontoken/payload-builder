import ContractAddressChangeValidator from './ContractAddressChangeValidator';
import { expect } from 'chai';


describe('ContractAddressChangeValidator', () => {
  it('given sample when decoding then ContractAddressChange action returned.', () => {
    // GIVEN
    const validator = new ContractAddressChangeValidator();
    const input = validator.sample;

    // WHEN
    const parsed = JSON.parse(input);
    const action = validator.validate(parsed.actionContents, parsed.header.version);

    // THEN
    expect(action).to.be.ok;
  });

});