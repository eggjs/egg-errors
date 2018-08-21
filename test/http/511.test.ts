import * as assert from 'assert';
import { NetworkAuthenticationRequiredError } from '../..';

describe('test/http/511.test.ts', () => {
  it('should instantiate', () => {
    const err = new NetworkAuthenticationRequiredError();
    assert(err.code === 'NETWORK_AUTHENTICATION_REQUIRED');
    assert(err.message === 'Network Authentication Required');
    assert(err.name === 'NetworkAuthenticationRequiredError');
    assert(err.status === 511);
  });
});
