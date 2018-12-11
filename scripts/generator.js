#!/usr/bin/env node

const fs = require('fs');
const statuses = require('statuses').STATUS_CODES;
const dedent = require('dedent');
const toidentifier = require('toidentifier');

for (const status of Object.keys(statuses)) {
  if (status < 400) continue;

  const identifier = toidentifier(statuses[status]);
  const className = /Error$/.test(identifier) ? identifier : identifier + 'Error';
  const code = toCode(identifier);
  const message = statuses[status].replace('\'', '\\\'');

  console.info(`export { default as ${className} } from './lib/http/${status}';`);

  let body = dedent`
    import HttpError from './http_error';

    class ${className} extends HttpError {

      constructor(message?: string) {
        const status = ${status};
        const code = '${code}';
        message = message || '${message}';

        super({ code, message, status });
      }
    }

    export default ${className};
  `;
  fs.writeFileSync(`lib/http/${status}.ts`, body + '\n');

  body = dedent`
    import * as assert from 'assert';
    import { ${className} } from '../../lib';

    describe('test/http/${status}.test.ts', () => {
      it('should instantiate', () => {
        const err = new ${className}();
        assert(err.code === '${code}');
        assert(err.message === '${message}');
        assert(err.name === '${className}');
        assert(err.status === ${status});
      });
    });
  `;
  fs.writeFileSync(`test/http/${status}.test.ts`, body + '\n');
}

function toCode(identifier) {
  return identifier.replace(/([a-zA-Z])([A-Z][a-z])/g, (_, $1, $2) => $1 + '_' + $2).toUpperCase();
}

