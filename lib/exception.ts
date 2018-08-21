import BaseError from './base';
import ErrorOptions from './error_options';
import ErrorType from './error_type';

const TYPE = Symbol.for('BaseError#type');

class EggException extends BaseError<ErrorOptions> {
  constructor(options?: ErrorOptions) {
    super(options);

    this[TYPE] = ErrorType.EXCEPTION;
  }
}

export default EggException;
