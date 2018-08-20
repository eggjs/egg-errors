import * as assert from 'assert';
import { ForbiddenError } from '../..';

describe('test/http/403.test.ts', () => {
  it('should instantiate', () => {
    const err = new ForbiddenError();
    assert(err.code === 'FORBIDDEN');
    assert(err.message === 'Forbidden');
    assert(err.name === 'ForbiddenError');
    assert(err.status === 403);
  });
});
