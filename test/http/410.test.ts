import * as assert from 'assert';
import { GoneError } from '../../lib';

describe('test/http/410.test.ts', () => {
  it('should instantiate', () => {
    const err = new GoneError();
    assert(err.code === 'GONE');
    assert(err.message === 'Gone');
    assert(err.name === 'GoneError');
    assert(err.status === 410);
  });
});
