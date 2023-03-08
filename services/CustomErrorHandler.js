class CustomerErrorHandler extends Error {
  constructor(status, msg) {
    super();
    this.status = status;
    this.message = msg;
  }

  static alreadyExists(message) {
    return new CustomerErrorHandler(409, message);
  }

  static wrongCredentials(message = "Username or password is incorrect") {
    return new CustomerErrorHandler(401, message);
  }
  static unAuthorized(message = "unAuthorized") {
    return new CustomerErrorHandler(401, message);
  }
  static notFound(message = "404 Not found") {
    return new CustomerErrorHandler(404, message);
  }
}

export default CustomerErrorHandler;
