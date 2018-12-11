import * as assert from 'assert';
import { UnprocessableEntityError } from '../../lib';

describe('test/http/422.test.ts', () => {
  it('should instantiate', () => {
    const err = new UnprocessableEntityError();
    assert(err.code === 'UNPROCESSABLE_ENTITY');
    assert(err.message === 'Unprocessable Entity');
    assert(err.name === 'UnprocessableEntityError');
    assert(err.status === 422);
  });
});
