// Generic Http Error
export class HttpError extends Error {
    status: number;

    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    }
}

// Bad Request Error
export class BadRequestError extends HttpError {
    constructor(message: string) {
        super(message, 400);
    }
}

// Unauthorized Error
export class UnauthorizedError extends HttpError {
    constructor(message: string) {
        super(message, 401);
    }
}

// Forbidden Error
export class ForbiddenError extends HttpError {
    constructor(message: string) {
        super(message, 403);
    }
}

// Not Found Error
export class NotFoundError extends HttpError {
    constructor(message: string) {
        super(message, 404);
    }
}

// Method Not Allowed Error
export class MethodNotAllowedError extends HttpError {
    constructor(message: string) {
        super(message, 405);
    }
}

// Not Acceptable Error
export class NotAcceptableError extends HttpError {
    constructor(message: string) {
        super(message, 406);
    }
}

// Too Many Requests Error
export class TooManyRequestsError extends HttpError {
    constructor(message: string) {
        super(message, 429);
    }
}

// Internal Server Error
export class InternalServerError extends HttpError {
    constructor(message: string) {
        super(message, 500);
    }
}
