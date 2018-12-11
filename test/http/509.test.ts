import * as assert from 'assert';
import { BandwidthLimitExceededError } from '../../lib';

describe('test/http/509.test.ts', () => {
  it('should instantiate', () => {
    const err = new BandwidthLimitExceededError();
    assert(err.code === 'BANDWIDTH_LIMIT_EXCEEDED');
    assert(err.message === 'Bandwidth Limit Exceeded');
    assert(err.name === 'BandwidthLimitExceededError');
    assert(err.status === 509);
  });
});
