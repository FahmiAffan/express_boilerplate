import StatusCodes from 'http'

const StatusCode = StatusCodes;

class CustomAPIError extends Error {
    constructor(message: Error['message']) {
        super(message);
    }
}

class BadRequest extends CustomAPIError {
    constructor(message: Error['message']) {
        super(message);
    }
}

class NotFound extends CustomAPIError {
    constructor(message: Error['message']) {
        super(message); 
    }
}
export default CustomAPIError;