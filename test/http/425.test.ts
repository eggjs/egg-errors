import * as assert from 'assert';
import { UnorderedCollectionError } from '../..';

describe('test/http/425.test.ts', () => {
  it('should instantiate', () => {
    const err = new UnorderedCollectionError();
    assert(err.code === 'UNORDERED_COLLECTION');
    assert(err.message === 'Unordered Collection');
    assert(err.name === 'UnorderedCollectionError');
    assert(err.status === 425);
  });
});
