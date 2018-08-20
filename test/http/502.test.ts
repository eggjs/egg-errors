import * as assert from 'assert';
import { BadGatewayError } from '../..';

describe('test/http/502.test.ts', () => {
  it('should instantiate', () => {
    const err = new BadGatewayError();
    assert(err.code === 'BAD_GATEWAY');
    assert(err.message === 'Bad Gateway');
    assert(err.name === 'BadGatewayError');
    assert(err.status === 502);
  });
});
