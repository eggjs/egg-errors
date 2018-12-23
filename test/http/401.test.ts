import * as assert from 'assert';
import { UnauthorizedError, E401 } from '../../lib';

describe('test/http/401.test.ts', () => {
  it('should instantiate', () => {
    const err = new UnauthorizedError();
    assert(err.code === 'UNAUTHORIZED');
    assert(err.message === 'Unauthorized');
    assert(err.name === 'UnauthorizedError');
    assert(err.status === 401);
  });

  it('should alias to short name E401', () => {
    const err = new E401();
    assert(err.code === 'UNAUTHORIZED');
    assert(err.message === 'Unauthorized');
    assert(err.name === 'UnauthorizedError');
    assert(err.status === 401);
  });
});
