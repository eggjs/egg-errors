import * as assert from 'assert';
import { ServiceUnavailableError } from '../../lib';

describe('test/http/503.test.ts', () => {
  it('should instantiate', () => {
    const err = new ServiceUnavailableError();
    assert(err.code === 'SERVICE_UNAVAILABLE');
    assert(err.message === 'Service Unavailable');
    assert(err.name === 'ServiceUnavailableError');
    assert(err.status === 503);
  });
});
