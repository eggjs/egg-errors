import HttpError from './http_error';

class ProxyAuthenticationRequiredError extends HttpError {

  constructor(message?: string) {
    const status = 407;
    const code = 'PROXY_AUTHENTICATION_REQUIRED';
    message = message || 'Proxy Authentication Required';

    super({ code, message, status });
  }
}

export default ProxyAuthenticationRequiredError;
