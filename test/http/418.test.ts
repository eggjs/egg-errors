import * as assert from 'assert';
import { ImATeapotError } from '../..';

describe('test/http/418.test.ts', () => {
  it('should instantiate', () => {
    const err = new ImATeapotError();
    assert(err.code === 'IMA_TEAPOT');
    assert(err.message === 'I\'m a teapot');
    assert(err.name === 'ImATeapotError');
    assert(err.status === 418);
  });
});
