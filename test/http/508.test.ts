import * as assert from 'assert';
import { LoopDetectedError } from '../..';

describe('test/http/508.test.ts', () => {
  it('should instantiate', () => {
    const err = new LoopDetectedError();
    assert(err.code === 'LOOP_DETECTED');
    assert(err.message === 'Loop Detected');
    assert(err.name === 'LoopDetectedError');
    assert(err.status === 508);
  });
});
