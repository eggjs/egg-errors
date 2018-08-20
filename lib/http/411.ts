import HttpError from './http_error';

class LengthRequiredError extends HttpError {

  constructor(message?: string) {
    const status = 411;
    const code = 'LENGTH_REQUIRED';
    message = message || 'Length Required';

    super({ code, message, status });
  }
}

export default LengthRequiredError;
