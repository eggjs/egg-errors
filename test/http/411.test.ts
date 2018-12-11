import * as assert from 'assert';
import { LengthRequiredError } from '../../lib';

describe('test/http/411.test.ts', () => {
  it('should instantiate', () => {
    const err = new LengthRequiredError();
    assert(err.code === 'LENGTH_REQUIRED');
    assert(err.message === 'Length Required');
    assert(err.name === 'LengthRequiredError');
    assert(err.status === 411);
  });
});
