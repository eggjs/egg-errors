import * as assert from 'assert';
import mock from 'egg-mock'
import { FrameworkErrorFormater, FrameworkBaseError } from '../../lib';
import * as os from 'os';
const hostname = os.hostname();

describe('test/framework/formatter.test.ts', () => {
  beforeEach(mock.restore);
  class CustomError extends FrameworkBaseError {
    get module() {
      return 'customPlugin';
    }
  }
  describe('format', () => {
    it('should format FrameworkError', () => {
      const err = new CustomError('error', '00', 'errorContext');
      const message = FrameworkErrorFormater.format(err);
      assert(message.includes('framework.CustomError: error [https://www.xxx.com/faq/customPlugin#00]'));
      assert(message.includes('code: "customPlugin_00"'));
      assert(message.includes('serialNumber: "00"'));
      assert(message.includes('errorContext: "errorContext"'));
      assert(/pid:\s\d+/.test(message));
      assert(message.includes(`hostname: ${hostname}`));
      assert(!message.includes('message: error'));
      assert(!message.includes('name: CustomError'));
      assert(!message.includes('options:'));
    });

    it('should format normal error', () => {
      const err = new Error('error');
      const message = FrameworkErrorFormater.format(err);
      assert(message.includes('framework.Error: error'));
      assert(!message.includes('[https://www.xxx.com/faq'));
      assert(/pid:\s\d+/.test(message));
      assert(message.includes(`hostname: ${hostname}`));
    });

    it('should format complex errorContext', () => {
      const err = new CustomError('error', '00', {
        str: 'str',
        num: 123,
        obj: {
          buf: Buffer.from('aaa'),
          obj: {
            date: new Date(),
            obj: {
              arr: ['abc', 123],
            },
          },
          arr: [false, true],
        }
      });
      const message = FrameworkErrorFormater.format(err);
      assert(/errorContext: \{\"str\"\:\"str\",\"num\":123,\"obj\"\:\{\"buf\"\:\"\<Buffer 61 61 61\>\",\"obj\"\:\{\"date\"\:\".*\",\"obj\"\:\{\"arr\"\:\[\"abc\",123\]\}\},\"arr\"\:\[false,true\]\}\}/.test(message));
    });

    it('should use default faqPrefix', () => {
      mock(FrameworkErrorFormater, 'faqPrefixEnv', null);
      const err = new CustomError('error', '00');
      const message = FrameworkErrorFormater.format(err);
      assert(message.includes('framework.CustomError: error [https://eggjs.org/zh-cn/faq/customPlugin#00]'));
    });
  });

  describe('extendable', () => {
    it('custom formatter should work', () => {
      class customErrorFormatter extends FrameworkErrorFormater {
        static faqPrefix = 'http://custom/faq';
      }
      mock(customErrorFormatter, 'faqPrefixEnv', null);
      const err = new CustomError('error', '00');
      const message = customErrorFormatter.format(err);
      assert(message.includes('framework.CustomError: error [http://custom/faq/customPlugin#00]'));
    });
  });
});