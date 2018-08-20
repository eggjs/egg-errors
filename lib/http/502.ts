import HttpError from './http_error';

class BadGatewayError extends HttpError {

  constructor(message?: string) {
    const status = 502;
    const code = 'BAD_GATEWAY';
    message = message || 'Bad Gateway';

    super({ code, message, status });
  }
}

export default BadGatewayError;
