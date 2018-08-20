import * as assert from 'assert';
import { EggError, EggException, ErrorOptions } from '..';

describe('test/error.test.ts', () => {

  describe('error', () => {
    it('should instantiate without params', () => {
      const err = new EggError();
      assert(err.code === '');
      assert(err.message === '');
      assert(err.name === 'EggError');
    });

    it('should instantiate with object', () => {
      const err = new EggError({
        code: 'CODE',
        message: 'error',
      });
      assert(err.code === 'CODE');
      assert(err.message === 'error');
      assert(err.name === 'EggError');
    });
  });

  describe('exception', () => {
    it('should instantiate without params', () => {
      const err = new EggException();
      assert(err.code === '');
      assert(err.message === '');
      assert(err.name === 'EggException');
    });

    it('should instantiate with object', () => {
      const err = new EggException({
        code: 'CODE',
        message: 'error',
      });
      assert(err.code === 'CODE');
      assert(err.message === 'error');
      assert(err.name === 'EggException');
    });
  });

  describe('getType', () => {
    it('should return ERROR', () => {
      const err = new EggError();
      assert(EggError.getType(err) === 'ERROR');
    });

    it('should return EXCEPTION', () => {
      const err = new EggException();
      assert(EggError.getType(err) === 'EXCEPTION');
    });

    it('should return BUILDIN', () => {
      const err = new Error();
      assert(EggError.getType(err) === 'BUILDIN');
    });
  });

  describe('from', () => {
    it('should create Error', () => {
      const err = new Error('error message');
      const err2 = EggError.from(err);
      assert(err2.code === '');
      assert(err2.message === 'error message');
      assert(err2.name === 'EggError');
      assert(err2.stack === err.stack);
      assert(EggError.getType(err2) === 'ERROR');
    });

    it('should create Exception', () => {
      const err = new Error('error message');
      const err2 = EggException.from(err);
      assert(err2.code === '');
      assert(err2.message === 'error message');
      assert(err2.name === 'EggException');
      assert(err2.stack === err.stack);
      assert(EggException.getType(err2) === 'EXCEPTION');
    });

    it('should create custom Error', () => {
      class CustomError extends EggError<ErrorOptions> {
        public data: object;
      }
      const err = new Error('error message');
      const err2 = CustomError.from(err);
      assert(err2.code === '');
      assert(err2.message === 'error message');
      assert(err2.name === 'CustomError');
      assert(err2.stack === err.stack);
    });
  });

  describe('extendable', () => {
    it('custom error', () => {
      class CustomError extends EggError<ErrorOptions> {}
      const err = new CustomError({
        code: 'CODE',
        message: 'error',
      });
      assert(err.code === 'CODE');
      assert(err.message === 'error');
      assert(err.name === 'CustomError');
    });

    it('custom error with options', () => {
      class CustomErrorOptions extends ErrorOptions {
        public data: object;
      }
      class CustomError extends EggError<CustomErrorOptions> {
        public data: object;
        protected options: CustomErrorOptions;

        constructor(message?: CustomErrorOptions) {
          super(message);
          this.data = this.options.data;
        }
      }
      const err = new CustomError({
        code: 'CODE',
        data: { a: 1 },
        message: 'error',
      });
      assert(err.code === 'CODE');
      assert(err.message === 'error');
      assert(err.name === 'CustomError');
      assert.deepEqual(err.data, { a: 1 });
    });
  });
});
