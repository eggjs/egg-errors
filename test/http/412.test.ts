import * as assert from 'assert';
import { PreconditionFailedError } from '../../lib';

describe('test/http/412.test.ts', () => {
  it('should instantiate', () => {
    const err = new PreconditionFailedError();
    assert(err.code === 'PRECONDITION_FAILED');
    assert(err.message === 'Precondition Failed');
    assert(err.name === 'PreconditionFailedError');
    assert(err.status === 412);
  });
});
