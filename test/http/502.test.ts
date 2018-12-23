import * as assert from 'assert';
import { BadGatewayError, E502 } from '../../lib';

describe('test/http/502.test.ts', () => {
  it('should instantiate', () => {
    const err = new BadGatewayError();
    assert(err.code === 'BAD_GATEWAY');
    assert(err.message === 'Bad Gateway');
    assert(err.name === 'BadGatewayError');
    assert(err.status === 502);
  });

  it('should alias to short name E502', () => {
    const err = new E502();
    assert(err.code === 'BAD_GATEWAY');
    assert(err.message === 'Bad Gateway');
    assert(err.name === 'BadGatewayError');
    assert(err.status === 502);
  });
});
