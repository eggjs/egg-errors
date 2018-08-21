import { ErrorOptions } from '..';
import EggBaseException from './base_exception';

class EggException extends EggBaseException<ErrorOptions> {
  constructor(message?: string) {
    super({
      code: 'EGG_EXCEPTION',
      message: message || '',
    });
  }
}

export default EggException;
