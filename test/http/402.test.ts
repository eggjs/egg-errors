import * as assert from 'assert';
import { PaymentRequiredError, E402 } from '../../lib';

describe('test/http/402.test.ts', () => {
  it('should instantiate', () => {
    const err = new PaymentRequiredError();
    assert(err.code === 'PAYMENT_REQUIRED');
    assert(err.message === 'Payment Required');
    assert(err.name === 'PaymentRequiredError');
    assert(err.status === 402);
  });

  it('should alias to short name E402', () => {
    const err = new E402();
    assert(err.code === 'PAYMENT_REQUIRED');
    assert(err.message === 'Payment Required');
    assert(err.name === 'PaymentRequiredError');
    assert(err.status === 402);
  });
});
