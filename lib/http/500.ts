import HttpError from './http_error';

class InternalServerErrorError extends HttpError {

  constructor(message?: string) {
    const status = 500;
    const code = 'INTERNAL_SERVER_ERROR';
    message = message || 'Internal Server Error';

    super({ code, message, status });
  }
}

export default InternalServerErrorError;
