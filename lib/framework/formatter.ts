import { FRAMEWORK_ERROR_SYMBOL, FrameworkBaseError } from './framework_base_error';
import * as util from 'util';
import * as os from 'os';
const hostname = os.hostname();

export class FrameworkErrorFormater {
  protected static faqPrefix = 'https://eggjs.org/zh-cn/faq';
  private static faqPrefixEnv = process.env.EGG_FRAMEWORK_ERR_FAQ_PERFIX;

  static format(err: Error): string {
    let errMessage = err.message;
    if (this.isFrameworkError(err)) {
      errMessage += ` [${this.faqPrefixEnv || this.faqPrefix}/${err.code}]`;
    }
    const errStack = err.stack || 'no_stack';

    return util.format('framework.%s: %s\n%s\ncode: %s\nserialNumber: %s\nerrorContext: %j\npid: %s\nhostname: %s\n',
      err.name,
      errMessage,
      errStack.substring(errStack.indexOf('\n') + 1),
      err.code,
      err.serialNumber,
      err.errorContext,
      process.pid,
      hostname,
    );
  }

  static formatError<T extends Error>(err: T): T {
    if (this.isFrameworkError(err)) {
      err.message += ` [${this.faqPrefixEnv || this.faqPrefix}/${err.code}]`;
    }
    return err;
  }

  private static isFrameworkError(err: Error): err is FrameworkBaseError {
    return (err as any)[FRAMEWORK_ERROR_SYMBOL] === true;
  }
}
