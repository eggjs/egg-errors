import * as assert from 'assert';
import { FrameworkBaseError } from '../../lib';

describe('test/framework/framework_base_error.test.ts', () => {
  describe('invalid', () => {
    it('should throw error when message or serialNumber empty', () => {
      assert.throws(() => {
        // @ts-ignore
        new FrameworkBaseError();
      }, /message is required/);

      assert.throws(() => {
        // @ts-ignore
        new FrameworkBaseError('error');
      }, /serialNumber is required/);
    });

    it('should throw error use FrameworkBaseError directly', () => {
      assert.throws(() => {
        // @ts-ignore
        new FrameworkBaseError('error', '0');
      }, /module should be implement/);
    });
  });

  describe('extendable', () => {
    class CustomError extends FrameworkBaseError {
      get module() {
        return 'customPlugin';
      }
    }

    it('custom error should work', () => {
      const err = new CustomError('error', '00');
      assert(err.module === 'customPlugin');
      assert(err.code === 'customPlugin_00');
      assert(err.message === 'error');
      assert(err.name === 'CustomError');
      assert(err.serialNumber === '00');
      assert(err.errorContext === '');
    });

    it('serialNumber type number should work', () => {
      const err = new CustomError('error', 123);
      assert(err.module === 'customPlugin');
      assert(err.code === 'customPlugin_123');
      assert(err.message === 'error');
      assert(err.name === 'CustomError');
      assert(err.serialNumber === '123');
      assert(err.errorContext === '');
    });

    it('errorContext should work', () => {
      const err = new CustomError('error', 1, { traceId: 'xxx' });
      assert(err.module === 'customPlugin');
      assert(err.code === 'customPlugin_1');
      assert(err.message === 'error');
      assert(err.name === 'CustomError');
      assert(err.serialNumber === '1');
      assert.deepStrictEqual(err.errorContext, { traceId: 'xxx' });
    });
  });
});
