import { FrameworkBaseError } from './framework_base_error';
import * as util from 'util';
import * as circularJSON from 'circular-json-for-egg';
import * as os from 'os';
const hostname = os.hostname();

function inspect(key, value?: object) {
  return `${key}: ${formatObject(value)}`;
}

function formatString(str) {
  if (str.length > 10000) {
    return `${str.substr(0, 10000)}...(${str.length})`;
  }
  return str;
}

function formatBuffer(buf) {
  const tail = buf.data.length > 50 ? ` ...(${buf.data.length}) ` : '';
  const bufStr = buf.data.slice(0, 50).map(i => {
    i = i.toString(16);
    if (i.length === 1) i = `0${i}`;
    return i;
  }).join(' ');
  return `<Buffer ${bufStr}${tail}>`;
}

function formatObject(obj) {
  try {
    return circularJSON.stringify(obj, (_, v) => {
      if (typeof v === 'string') return formatString(v);
      if (v && v.type === 'Buffer' && Array.isArray(v.data)) {
        return formatBuffer(v);
      }
      if (v instanceof RegExp) return inspect(v);
      return v;
    });
  } catch (_) {
    /* istanbul ignore next */
    return String(obj);
  }
}

export class FrameworkErrorFormater {
  protected static faqPrefix: string = 'https://eggjs.org/zh-cn/faq';
  private static faqPrefixEnv = process.env.EGG_FRAMEWORK_ERR_FAQ_PERFIX;
  
  static format(err: Error): string {
    let errMessage = err.message;
    if (err instanceof FrameworkBaseError) {
      errMessage += ` [${this.faqPrefixEnv || this.faqPrefix}/${err.module}#${err.serialNumber}]`;
    }
    const errStack = err.stack || 'no_stack';
    const errProperties = Object.keys(err).map(key => {
      if (['options', 'name', 'message'].includes(key)) return '';
      return inspect(key, err[key]);
    }).filter(item => !!item).join('\n');
    return util.format('framework.%s: %s\n%s\n%s\npid: %s\nhostname: %s\n',
      err.name,
      errMessage,
      errStack.substring(errStack.indexOf('\n') + 1),
      errProperties,
      process.pid,
      hostname
    );
  }
}