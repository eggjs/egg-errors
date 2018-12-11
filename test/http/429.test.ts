import * as assert from 'assert';
import { TooManyRequestsError } from '../../lib';

describe('test/http/429.test.ts', () => {
  it('should instantiate', () => {
    const err = new TooManyRequestsError();
    assert(err.code === 'TOO_MANY_REQUESTS');
    assert(err.message === 'Too Many Requests');
    assert(err.name === 'TooManyRequestsError');
    assert(err.status === 429);
  });
});
