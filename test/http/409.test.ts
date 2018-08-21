import * as assert from 'assert';
import { ConflictError } from '../..';

describe('test/http/409.test.ts', () => {
  it('should instantiate', () => {
    const err = new ConflictError();
    assert(err.code === 'CONFLICT');
    assert(err.message === 'Conflict');
    assert(err.name === 'ConflictError');
    assert(err.status === 409);
  });
});
