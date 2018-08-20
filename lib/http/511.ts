import HttpError from './http_error';

class NetworkAuthenticationRequiredError extends HttpError {

  constructor(message?: string) {
    const status = 511;
    const code = 'NETWORK_AUTHENTICATION_REQUIRED';
    message = message || 'Network Authentication Required';

    super({ code, message, status });
  }
}

export default NetworkAuthenticationRequiredError;
