import VoteValidator from './VoteValidator';
import { expect } from 'chai';


describe('VoteValidator', () => {
  it('given sample when decoding then action returned.', () => {
    // GIVEN
    const validator = new VoteValidator();
    const input = validator.sample;

    // WHEN
    const parsed = JSON.parse(input);
    const action = validator.validate(parsed.actionContents, parsed.header.version);

    // THEN
    expect(action).to.be.ok;
  });

});