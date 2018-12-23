import * as assert from 'assert';
import { UnprocessableEntityError, E422 } from '../../lib';

describe('test/http/422.test.ts', () => {
  it('should instantiate', () => {
    const err = new UnprocessableEntityError();
    assert(err.code === 'UNPROCESSABLE_ENTITY');
    assert(err.message === 'Unprocessable Entity');
    assert(err.name === 'UnprocessableEntityError');
    assert(err.status === 422);
  });

  it('should alias to short name E422', () => {
    const err = new E422();
    assert(err.code === 'UNPROCESSABLE_ENTITY');
    assert(err.message === 'Unprocessable Entity');
    assert(err.name === 'UnprocessableEntityError');
    assert(err.status === 422);
  });
});
