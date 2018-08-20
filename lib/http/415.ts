import HttpError from './http_error';

class UnsupportedMediaTypeError extends HttpError {

  constructor(message?: string) {
    const status = 415;
    const code = 'UNSUPPORTED_MEDIA_TYPE';
    message = message || 'Unsupported Media Type';

    super({ code, message, status });
  }
}

export default UnsupportedMediaTypeError;
