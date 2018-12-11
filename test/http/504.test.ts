import * as assert from 'assert';
import { GatewayTimeoutError } from '../../lib';

describe('test/http/504.test.ts', () => {
  it('should instantiate', () => {
    const err = new GatewayTimeoutError();
    assert(err.code === 'GATEWAY_TIMEOUT');
    assert(err.message === 'Gateway Timeout');
    assert(err.name === 'GatewayTimeoutError');
    assert(err.status === 504);
  });
});
