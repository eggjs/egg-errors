import * as assert from 'assert';
import { NotAcceptableError } from '../..';

describe('test/http/406.test.ts', () => {
  it('should instantiate', () => {
    const err = new NotAcceptableError();
    assert(err.code === 'NOT_ACCEPTABLE');
    assert(err.message === 'Not Acceptable');
    assert(err.name === 'NotAcceptableError');
    assert(err.status === 406);
  });
});
