import * as assert from 'assert';
import { PayloadTooLargeError } from '../../lib';

describe('test/http/413.test.ts', () => {
  it('should instantiate', () => {
    const err = new PayloadTooLargeError();
    assert(err.code === 'PAYLOAD_TOO_LARGE');
    assert(err.message === 'Payload Too Large');
    assert(err.name === 'PayloadTooLargeError');
    assert(err.status === 413);
  });
});
