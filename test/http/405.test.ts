import * as assert from 'assert';
import { MethodNotAllowedError } from '../../lib';

describe('test/http/405.test.ts', () => {
  it('should instantiate', () => {
    const err = new MethodNotAllowedError();
    assert(err.code === 'METHOD_NOT_ALLOWED');
    assert(err.message === 'Method Not Allowed');
    assert(err.name === 'MethodNotAllowedError');
    assert(err.status === 405);
  });
});
