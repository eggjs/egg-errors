import * as assert from 'assert';
import { HTTPVersionNotSupportedError } from '../../lib';

describe('test/http/505.test.ts', () => {
  it('should instantiate', () => {
    const err = new HTTPVersionNotSupportedError();
    assert(err.code === 'HTTP_VERSION_NOT_SUPPORTED');
    assert(err.message === 'HTTP Version Not Supported');
    assert(err.name === 'HTTPVersionNotSupportedError');
    assert(err.status === 505);
  });
});
