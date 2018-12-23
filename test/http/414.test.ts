import * as assert from 'assert';
import { URITooLongError, E414 } from '../../lib';

describe('test/http/414.test.ts', () => {
  it('should instantiate', () => {
    const err = new URITooLongError();
    assert(err.code === 'URI_TOO_LONG');
    assert(err.message === 'URI Too Long');
    assert(err.name === 'URITooLongError');
    assert(err.status === 414);
  });

  it('should alias to short name E414', () => {
    const err = new E414();
    assert(err.code === 'URI_TOO_LONG');
    assert(err.message === 'URI Too Long');
    assert(err.name === 'URITooLongError');
    assert(err.status === 414);
  });
});
