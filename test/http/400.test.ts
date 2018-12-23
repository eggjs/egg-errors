import * as assert from 'assert';
import { BadRequestError, E400 } from '../../lib';

describe('test/http/400.test.ts', () => {
  it('should instantiate', () => {
    const err = new BadRequestError();
    assert(err.code === 'BAD_REQUEST');
    assert(err.message === 'Bad Request');
    assert(err.name === 'BadRequestError');
    assert(err.status === 400);
  });

  it('should alias to short name E400', () => {
    const err = new E400();
    assert(err.code === 'BAD_REQUEST');
    assert(err.message === 'Bad Request');
    assert(err.name === 'BadRequestError');
    assert(err.status === 400);
  });
});
