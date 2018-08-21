import BaseError from './base';
import ErrorOptions from './error_options';
import ErrorType from './error_type';

const TYPE = Symbol.for('BaseError#type');

class EggError<T extends ErrorOptions> extends BaseError<T> {
  constructor(options?: T) {
    super(options);

    this[TYPE] = ErrorType.ERROR;
  }
}

export default EggError;
