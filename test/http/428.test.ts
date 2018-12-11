import * as assert from 'assert';
import { PreconditionRequiredError } from '../../lib';

describe('test/http/428.test.ts', () => {
  it('should instantiate', () => {
    const err = new PreconditionRequiredError();
    assert(err.code === 'PRECONDITION_REQUIRED');
    assert(err.message === 'Precondition Required');
    assert(err.name === 'PreconditionRequiredError');
    assert(err.status === 428);
  });
});
