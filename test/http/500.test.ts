import * as assert from 'assert';
import { InternalServerError } from '../../lib';

describe('test/http/500.test.ts', () => {
  it('should instantiate', () => {
    const err = new InternalServerError();
    assert(err.code === 'INTERNAL_SERVER_ERROR');
    assert(err.message === 'Internal Server Error');
    assert(err.name === 'InternalServerError');
    assert(err.status === 500);
  });
});
