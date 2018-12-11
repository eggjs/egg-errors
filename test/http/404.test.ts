import * as assert from 'assert';
import { NotFoundError } from '../../lib';

describe('test/http/404.test.ts', () => {
  it('should instantiate', () => {
    const err = new NotFoundError();
    assert(err.code === 'NOT_FOUND');
    assert(err.message === 'Not Found');
    assert(err.name === 'NotFoundError');
    assert(err.status === 404);
  });
});
