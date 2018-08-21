import * as assert from 'assert';
import { VariantAlsoNegotiatesError } from '../..';

describe('test/http/506.test.ts', () => {
  it('should instantiate', () => {
    const err = new VariantAlsoNegotiatesError();
    assert(err.code === 'VARIANT_ALSO_NEGOTIATES');
    assert(err.message === 'Variant Also Negotiates');
    assert(err.name === 'VariantAlsoNegotiatesError');
    assert(err.status === 506);
  });
});
