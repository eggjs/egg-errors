import * as assert from 'assert';
import { LockedError } from '../../lib';

describe('test/http/423.test.ts', () => {
  it('should instantiate', () => {
    const err = new LockedError();
    assert(err.code === 'LOCKED');
    assert(err.message === 'Locked');
    assert(err.name === 'LockedError');
    assert(err.status === 423);
  });
});
