import * as assert from 'assert';
import { PaymentRequiredError } from '../..';

describe('test/http/402.test.ts', () => {
  it('should instantiate', () => {
    const err = new PaymentRequiredError();
    assert(err.code === 'PAYMENT_REQUIRED');
    assert(err.message === 'Payment Required');
    assert(err.name === 'PaymentRequiredError');
    assert(err.status === 402);
  });
});
