import * as assert from 'assert';
import { UpgradeRequiredError } from '../../lib';

describe('test/http/426.test.ts', () => {
  it('should instantiate', () => {
    const err = new UpgradeRequiredError();
    assert(err.code === 'UPGRADE_REQUIRED');
    assert(err.message === 'Upgrade Required');
    assert(err.name === 'UpgradeRequiredError');
    assert(err.status === 426);
  });
});
