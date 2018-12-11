import * as assert from 'assert';
import { UnauthorizedError } from '../../lib';

describe('test/http/401.test.ts', () => {
  it('should instantiate', () => {
    const err = new UnauthorizedError();
    assert(err.code === 'UNAUTHORIZED');
    assert(err.message === 'Unauthorized');
    assert(err.name === 'UnauthorizedError');
    assert(err.status === 401);
  });
});
