import * as assert from 'assert';
import { RangeNotSatisfiableError } from '../../lib';

describe('test/http/416.test.ts', () => {
  it('should instantiate', () => {
    const err = new RangeNotSatisfiableError();
    assert(err.code === 'RANGE_NOT_SATISFIABLE');
    assert(err.message === 'Range Not Satisfiable');
    assert(err.name === 'RangeNotSatisfiableError');
    assert(err.status === 416);
  });
});
