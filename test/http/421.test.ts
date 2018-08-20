import * as assert from 'assert';
import { MisdirectedRequestError } from '../..';

describe('test/http/421.test.ts', () => {
  it('should instantiate', () => {
    const err = new MisdirectedRequestError();
    assert(err.code === 'MISDIRECTED_REQUEST');
    assert(err.message === 'Misdirected Request');
    assert(err.name === 'MisdirectedRequestError');
    assert(err.status === 421);
  });
});
