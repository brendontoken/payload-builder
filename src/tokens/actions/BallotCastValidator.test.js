import BallotCastValidator from './BallotCastValidator';
import { expect } from 'chai';


describe('BallotCastValidator', () => {
  it('given sample when decoding then BallotCast returned.', () => {
    // GIVEN
    const validator = new BallotCastValidator();
    const input = validator.sample;

    // WHEN
    const parsed = JSON.parse(input);
    const action = validator.validate(parsed.actionContents, parsed.header.version);

    // THEN
    expect(action).to.be.ok;
  });

});

