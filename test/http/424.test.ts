import * as assert from 'assert';
import { FailedDependencyError } from '../../lib';

describe('test/http/424.test.ts', () => {
  it('should instantiate', () => {
    const err = new FailedDependencyError();
    assert(err.code === 'FAILED_DEPENDENCY');
    assert(err.message === 'Failed Dependency');
    assert(err.name === 'FailedDependencyError');
    assert(err.status === 424);
  });
});
