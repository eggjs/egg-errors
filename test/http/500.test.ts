import * as assert from 'assert';
import { InternalServerErrorError } from '../..';

describe('test/http/500.test.ts', () => {
  it('should instantiate', () => {
    const err = new InternalServerErrorError();
    assert(err.code === 'INTERNAL_SERVER_ERROR');
    assert(err.message === 'Internal Server Error');
    assert(err.name === 'InternalServerErrorError');
    assert(err.status === 500);
  });
});
