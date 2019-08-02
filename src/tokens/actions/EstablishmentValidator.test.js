import EstablishmentValidator from './EstablishmentValidator';
import { expect } from 'chai';


describe('EstablishmentValidator', () => {
  it('given sample when decoding then action returned.', () => {
    // GIVEN
    const validator = new EstablishmentValidator();
    const input = validator.sample;

    // WHEN
    const parsed = JSON.parse(input);
    const action = validator.validate(parsed.actionContents, parsed.header.version);

    // THEN
    expect(action).to.be.ok;
  });

});