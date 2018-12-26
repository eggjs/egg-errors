import * as assert from 'assert';
import { PreconditionRequiredError, E428 } from '../../lib';

describe('test/http/428.test.ts', () => {
  it('should instantiate', () => {
    const err = new PreconditionRequiredError();
    assert(err.code === 'PRECONDITION_REQUIRED');
    assert(err.message === 'Precondition Required');
    assert(err.name === 'PreconditionRequiredError');
    assert(err.status === 428);
  });

  it('should alias to short name E428', () => {
    const err = new E428();
    assert(err.code === 'PRECONDITION_REQUIRED');
    assert(err.message === 'Precondition Required');
    assert(err.name === 'PreconditionRequiredError');
    assert(err.status === 428);
  });
});
