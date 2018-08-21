import * as assert from 'assert';
import { RequestHeaderFieldsTooLargeError } from '../..';

describe('test/http/431.test.ts', () => {
  it('should instantiate', () => {
    const err = new RequestHeaderFieldsTooLargeError();
    assert(err.code === 'REQUEST_HEADER_FIELDS_TOO_LARGE');
    assert(err.message === 'Request Header Fields Too Large');
    assert(err.name === 'RequestHeaderFieldsTooLargeError');
    assert(err.status === 431);
  });
});
