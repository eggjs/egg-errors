import HttpError from './http_error';

class LockedError extends HttpError {

  constructor(message?: string) {
    const status = 423;
    const code = 'LOCKED';
    message = message || 'Locked';

    super({ code, message, status });
  }
}

export default LockedError;
