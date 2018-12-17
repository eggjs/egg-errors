import ErrorOptions from './error_options';
import ErrorType from './error_type';

const TYPE: symbol = Symbol.for('BaseError#type');

class BaseError<T extends ErrorOptions> extends Error {

  [key: string]: any;

  public static getType(err: Error): string {
    return (err as any)[TYPE] || ErrorType.BUILTIN;
  }

  public static from(err: Error): BaseError<ErrorOptions> {
    const ErrorClass = this;
    const newErr = new ErrorClass<ErrorOptions>();
    newErr.message = err.message;
    newErr.stack = err.stack;
    for (const key of Object.keys(err)) {
      newErr[key] = err[key];
    }
    return newErr;
  }

  public code: string;
  protected options?: T;

  constructor(options?: T) {
    super();
    this.options = options || {} as T;
    this.message = this.options.message || '';
    this.code = this.options.code || '';
    this.name = this.constructor.name;
  }

}

export default BaseError;
