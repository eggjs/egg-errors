import EggError from '../error';
import HttpErrorOptions from './http_error_options';
import HttpHeader from './http_header';

class HttpError extends EggError<HttpErrorOptions> {

  public status: number;
  public headers?: HttpHeader;
  protected options: HttpErrorOptions;

  constructor(message?: HttpErrorOptions) {
    super(message);

    if (this.options) {
      this.status = this.options.status;
      this.headers = this.options.headers;
    }
  }

}

export default HttpError;
