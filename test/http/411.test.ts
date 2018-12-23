import * as assert from 'assert';
import { LengthRequiredError, E411 } from '../../lib';

describe('test/http/411.test.ts', () => {
  it('should instantiate', () => {
    const err = new LengthRequiredError();
    assert(err.code === 'LENGTH_REQUIRED');
    assert(err.message === 'Length Required');
    assert(err.name === 'LengthRequiredError');
    assert(err.status === 411);
  });

  it('should alias to short name E411', () => {
    const err = new E411();
    assert(err.code === 'LENGTH_REQUIRED');
    assert(err.message === 'Length Required');
    assert(err.name === 'LengthRequiredError');
    assert(err.status === 411);
  });
});
