import * as assert from 'assert';
import { FailedDependencyError, E424 } from '../../lib';

describe('test/http/424.test.ts', () => {
  it('should instantiate', () => {
    const err = new FailedDependencyError();
    assert(err.code === 'FAILED_DEPENDENCY');
    assert(err.message === 'Failed Dependency');
    assert(err.name === 'FailedDependencyError');
    assert(err.status === 424);
  });

  it('should alias to short name E424', () => {
    const err = new E424();
    assert(err.code === 'FAILED_DEPENDENCY');
    assert(err.message === 'Failed Dependency');
    assert(err.name === 'FailedDependencyError');
    assert(err.status === 424);
  });
});
