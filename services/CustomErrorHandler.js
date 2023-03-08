class CustomerErrorHandler extends Error {

    constructor(status, msg) {
        this.status = status;
        this.message = msg;

    }


    static alreadyExists(message) {
        return new CustomerErrorHandler(409, message)
    }

}

export default CustomerErrorHandler 