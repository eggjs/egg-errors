import * as assert from 'assert';
import { NotAcceptableError, E406 } from '../../lib';

describe('test/http/406.test.ts', () => {
  it('should instantiate', () => {
    const err = new NotAcceptableError();
    assert(err.code === 'NOT_ACCEPTABLE');
    assert(err.message === 'Not Acceptable');
    assert(err.name === 'NotAcceptableError');
    assert(err.status === 406);
  });

  it('should alias to short name E406', () => {
    const err = new E406();
    assert(err.code === 'NOT_ACCEPTABLE');
    assert(err.message === 'Not Acceptable');
    assert(err.name === 'NotAcceptableError');
    assert(err.status === 406);
  });
});
