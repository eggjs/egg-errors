# egg-errors
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-errors.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-errors
[travis-image]: https://img.shields.io/travis/eggjs/egg-errors.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-errors
[codecov-image]: https://codecov.io/gh/eggjs/egg-errors/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/eggjs/egg-errors
[david-image]: https://img.shields.io/david/eggjs/egg-errors.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-errors
[snyk-image]: https://snyk.io/test/npm/egg-errors/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-errors
[download-image]: https://img.shields.io/npm/dm/egg-errors.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-errors

Errors for Egg.js.

egg-errors provide two kinds of errors that is Error and Exception.

- Exception is system error that egg will log an error and throw exception, but it will be catched by onerror plugin.
- Error is business error that egg will transform it to response.

## Install

```bash
$ npm i egg-errors --save
```

## Usage

Create an Error

```js
const { EggError, EggException } = require('egg-errors');
let err = new EggError('egg error');
console.log(EggError.getType(err)); // ERROR
```

Create an Exception

```js
err = new EggException('egg exception');
console.log(EggException.getType(err)); // EXCEPTION
```

You can import an error from an normal error object

```js
err = new Error('normal error');
console.log(EggError.getType(err)); // BUILDIN
err = EggError.from(err);
console.log(EggError.getType(err)); // ERROR
```

### Customize Error

Error can be extendable.

```js
const { EggBaseError } = require('egg-errors');

class CustomError extends EggBaseError {
  constructor(message) {
    super({ message, code: 'CUSTOM_CODE' });
  }
 }
```

or using typescript you can customize ErrorOptions.

```js
import { EggBaseError, ErrorOptions } from 'egg-errors';

class CustomErrorOptions extends ErrorOptions {
  public data: object;
}
class CustomError extends EggBaseError<CustomErrorOptions> {
  public data: object;
  protected options: CustomErrorOptions;

  constructor(options?: CustomErrorOptions) {
    super(options);
    this.data = this.options.data;
  }
}
```

Recommand use message instead of options in user land that it can be easily understood by developer, see [http error](https://github.com/eggjs/egg-errors/blob/master/lib/http/400.ts).

### HTTP Errors

HTTP Errors is buildin errors that transform 400 ~ 500 status code to error objects. HttpError extends EggBaseError providing two properties which is `status` and `headers`;

```js
const { ForbiddenError } = require('egg-errors');
const err = new ForbiddenError('your request is forbidden');
console.log(err.status); // 403
```

### Available Errors

```
BaseError
|- EggBaseError
|  |- EggError
|  |- HttpError
|  |  |- NotFoundError
|  |  `- ...
|  `- CustomError
`- EggBaseException
   |- EggException
   `- CustomException
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc).

## License

[MIT](LICENSE)
