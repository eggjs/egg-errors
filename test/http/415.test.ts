import * as assert from 'assert';
import { UnsupportedMediaTypeError } from '../../lib';

describe('test/http/415.test.ts', () => {
  it('should instantiate', () => {
    const err = new UnsupportedMediaTypeError();
    assert(err.code === 'UNSUPPORTED_MEDIA_TYPE');
    assert(err.message === 'Unsupported Media Type');
    assert(err.name === 'UnsupportedMediaTypeError');
    assert(err.status === 415);
  });
});
