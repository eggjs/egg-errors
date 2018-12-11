import * as assert from 'assert';
import { ProxyAuthenticationRequiredError } from '../../lib';

describe('test/http/407.test.ts', () => {
  it('should instantiate', () => {
    const err = new ProxyAuthenticationRequiredError();
    assert(err.code === 'PROXY_AUTHENTICATION_REQUIRED');
    assert(err.message === 'Proxy Authentication Required');
    assert(err.name === 'ProxyAuthenticationRequiredError');
    assert(err.status === 407);
  });
});
