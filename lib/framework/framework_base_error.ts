import { EggBaseError, ErrorOptions } from '../';
import * as assert from 'assert';

export const FRAMEWORK_ERROR_SYMBOL: symbol = Symbol.for('FrameworkBaseError');

export class FrameworkBaseError extends EggBaseError<ErrorOptions> {
  public readonly serialNumber: string;
  public readonly errorContext?: any;

  get module(): string {
    throw new Error('module should be implement');
  }

  constructor(message: string, serialNumber: string | number, errorContext?: any) {
    super({ message, serialNumber, errorContext });
    assert(message, 'message is required');
    assert(serialNumber, 'serialNumber is required');

    this.serialNumber = String(serialNumber);
    this.errorContext = errorContext || '';
    this.code = `${this.module}_${this.serialNumber}`;

    (this as any)[FRAMEWORK_ERROR_SYMBOL] = true;
  }
}
