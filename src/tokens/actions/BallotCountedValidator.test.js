import BallotCountedValidator from '../../../src/tokens/actions/BallotCastValidator';
import { expect } from 'chai';


describe('BallotCountedValidator', () => {
  it('given sample when decoding then action returned.', () => {
    // GIVEN
    const validator = new BallotCountedValidator();
    const input = validator.sample;

    // WHEN
    const parsed = JSON.parse(input);
    const action = validator.validate(parsed.actionContents, parsed.header.version);

    // THEN
    expect(action).to.be.ok;
  });

});

