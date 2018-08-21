import * as assert from 'assert';
import { InsufficientStorageError } from '../..';

describe('test/http/507.test.ts', () => {
  it('should instantiate', () => {
    const err = new InsufficientStorageError();
    assert(err.code === 'INSUFFICIENT_STORAGE');
    assert(err.message === 'Insufficient Storage');
    assert(err.name === 'InsufficientStorageError');
    assert(err.status === 507);
  });
});
