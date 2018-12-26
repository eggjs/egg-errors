import * as assert from 'assert';
import { RequestTimeoutError, E408 } from '../../lib';

describe('test/http/408.test.ts', () => {
  it('should instantiate', () => {
    const err = new RequestTimeoutError();
    assert(err.code === 'REQUEST_TIMEOUT');
    assert(err.message === 'Request Timeout');
    assert(err.name === 'RequestTimeoutError');
    assert(err.status === 408);
  });

  it('should alias to short name E408', () => {
    const err = new E408();
    assert(err.code === 'REQUEST_TIMEOUT');
    assert(err.message === 'Request Timeout');
    assert(err.name === 'RequestTimeoutError');
    assert(err.status === 408);
  });
});
