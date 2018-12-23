import * as assert from 'assert';
import { UpgradeRequiredError, E426 } from '../../lib';

describe('test/http/426.test.ts', () => {
  it('should instantiate', () => {
    const err = new UpgradeRequiredError();
    assert(err.code === 'UPGRADE_REQUIRED');
    assert(err.message === 'Upgrade Required');
    assert(err.name === 'UpgradeRequiredError');
    assert(err.status === 426);
  });

  it('should alias to short name E426', () => {
    const err = new E426();
    assert(err.code === 'UPGRADE_REQUIRED');
    assert(err.message === 'Upgrade Required');
    assert(err.name === 'UpgradeRequiredError');
    assert(err.status === 426);
  });
});
