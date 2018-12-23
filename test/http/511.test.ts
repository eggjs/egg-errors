import * as assert from 'assert';
import { NetworkAuthenticationRequiredError, E511 } from '../../lib';

describe('test/http/511.test.ts', () => {
  it('should instantiate', () => {
    const err = new NetworkAuthenticationRequiredError();
    assert(err.code === 'NETWORK_AUTHENTICATION_REQUIRED');
    assert(err.message === 'Network Authentication Required');
    assert(err.name === 'NetworkAuthenticationRequiredError');
    assert(err.status === 511);
  });

  it('should alias to short name E511', () => {
    const err = new E511();
    assert(err.code === 'NETWORK_AUTHENTICATION_REQUIRED');
    assert(err.message === 'Network Authentication Required');
    assert(err.name === 'NetworkAuthenticationRequiredError');
    assert(err.status === 511);
  });
});
