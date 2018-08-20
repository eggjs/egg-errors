import * as assert from 'assert';
import { UnavailableForLegalReasonsError } from '../..';

describe('test/http/451.test.ts', () => {
  it('should instantiate', () => {
    const err = new UnavailableForLegalReasonsError();
    assert(err.code === 'UNAVAILABLE_FOR_LEGAL_REASONS');
    assert(err.message === 'Unavailable For Legal Reasons');
    assert(err.name === 'UnavailableForLegalReasonsError');
    assert(err.status === 451);
  });
});
