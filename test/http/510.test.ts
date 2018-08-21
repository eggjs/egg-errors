import * as assert from 'assert';
import { NotExtendedError } from '../..';

describe('test/http/510.test.ts', () => {
  it('should instantiate', () => {
    const err = new NotExtendedError();
    assert(err.code === 'NOT_EXTENDED');
    assert(err.message === 'Not Extended');
    assert(err.name === 'NotExtendedError');
    assert(err.status === 510);
  });
});
