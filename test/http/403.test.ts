import * as assert from 'assert';
import { ForbiddenError, E403 } from '../../lib';

describe('test/http/403.test.ts', () => {
  it('should instantiate', () => {
    const err = new ForbiddenError();
    assert(err.code === 'FORBIDDEN');
    assert(err.message === 'Forbidden');
    assert(err.name === 'ForbiddenError');
    assert(err.status === 403);
  });

  it('should alias to short name E403', () => {
    const err = new E403();
    assert(err.code === 'FORBIDDEN');
    assert(err.message === 'Forbidden');
    assert(err.name === 'ForbiddenError');
    assert(err.status === 403);
  });
});
