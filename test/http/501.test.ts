import * as assert from 'assert';
import { NotImplementedError } from '../..';

describe('test/http/501.test.ts', () => {
  it('should instantiate', () => {
    const err = new NotImplementedError();
    assert(err.code === 'NOT_IMPLEMENTED');
    assert(err.message === 'Not Implemented');
    assert(err.name === 'NotImplementedError');
    assert(err.status === 501);
  });
});
