import * as assert from 'assert';
import { ServiceUnavailableError, E503 } from '../../lib';

describe('test/http/503.test.ts', () => {
  it('should instantiate', () => {
    const err = new ServiceUnavailableError();
    assert(err.code === 'SERVICE_UNAVAILABLE');
    assert(err.message === 'Service Unavailable');
    assert(err.name === 'ServiceUnavailableError');
    assert(err.status === 503);
  });

  it('should alias to short name E503', () => {
    const err = new E503();
    assert(err.code === 'SERVICE_UNAVAILABLE');
    assert(err.message === 'Service Unavailable');
    assert(err.name === 'ServiceUnavailableError');
    assert(err.status === 503);
  });
});
