import * as assert from 'assert';
import { ConflictError, E409 } from '../../lib';

describe('test/http/409.test.ts', () => {
  it('should instantiate', () => {
    const err = new ConflictError();
    assert(err.code === 'CONFLICT');
    assert(err.message === 'Conflict');
    assert(err.name === 'ConflictError');
    assert(err.status === 409);
  });

  it('should alias to short name E409', () => {
    const err = new E409();
    assert(err.code === 'CONFLICT');
    assert(err.message === 'Conflict');
    assert(err.name === 'ConflictError');
    assert(err.status === 409);
  });
});
