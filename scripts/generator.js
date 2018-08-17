#!/usr/bin/env node

const fs = require('fs');
const statuses = require('statuses').STATUS_CODES;
const dedent = require('dedent');
const toidentifier = require('toidentifier');

for (const status of Object.keys(statuses)) {
  if (status < 400) continue;

  const message = statuses[status];
  console.info(status, message);
  const identifier = toidentifier(message);
  const className = identifier + 'Error';
  const code = toCode(identifier);

  const body = dedent`
    import HttpError from './http_error';

    class ${className} extends HttpError {

      constructor(message?: string) {
        const status = ${status};
        const code = '${code}';
        message = message || '${message.replace('\'', '\\\'')}';

        super({ code, message, status });
      }
    }

    export default ${className};

  `;

  fs.writeFileSync(`lib/http/${status}.ts`, body + '\n');
}

function toCode(identifier) {
  return identifier.replace(/([a-zA-Z])([A-Z][a-z])/g, (_, $1, $2) => $1 + '_' + $2).toUpperCase();
}

