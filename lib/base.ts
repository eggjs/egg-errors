import ErrorOptions from './error_options';
import ErrorType from './error_type';

const TYPE = Symbol.for('BaseError#type');

class BaseError<T extends ErrorOptions> extends Error {

  public static getType(err: Error): string {
    return err[TYPE] || ErrorType.BUILDIN;
  }

  public static from(err: Error): BaseError<ErrorOptions> {
    const ErrorClass = this;
    const newErr = new ErrorClass<ErrorOptions>({
      message: err.message,
    });
    newErr.stack = err.stack;
    return newErr;
  }

  public code: string;
  protected options?: T;

  constructor(message?: T) {
    super();
    this.options = message;
    this.message = this.options && this.options.message || '';
    this.code = this.options && this.options.code || '';
    this.name = this.constructor.name;
  }

}

export default BaseError;
