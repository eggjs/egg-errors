import * as assert from 'assert';
import { ExpectationFailedError } from '../../lib';

describe('test/http/417.test.ts', () => {
  it('should instantiate', () => {
    const err = new ExpectationFailedError();
    assert(err.code === 'EXPECTATION_FAILED');
    assert(err.message === 'Expectation Failed');
    assert(err.name === 'ExpectationFailedError');
    assert(err.status === 417);
  });
});
