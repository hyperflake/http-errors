# @hyperflake/http-errors

`@hyperflake/http-errors` is a Node.js package that provides a suite of custom error classes for managing HTTP response statuses within applications. This package enables developers to throw specific HTTP errors that can be systematically caught and handled by middleware, ensuring a consistent response structure across application.

## Installation

You can install this package using npm: 

```bash
npm install @hyperflake/http-errors
```

or yarn:
```bash
yarn add @hyperflake/http-errors
```

## Available Error Classes

This package offers several predefined error classes aligned with common HTTP status codes:

- **BadRequestError** - 400 Bad Request
- **UnauthorizedError** - 401 Unauthorized
- **ForbiddenError** - 403 Forbidden
- **NotFoundError** - 404 Not Found
- **MethodNotAllowedError** - 405 Method Not Allowed
- **NotAcceptableError** - 406 Not Acceptable
- **TooManyRequestsError** - 429 Too Many Requests
- **InternalServerError** - 500 Internal Server Error

All these classes are derived from the base class HttpError, which itself extends JavaScript's native Error.

## Usage Example
Below is an example demonstrating how to utilize these errors in a Node.js application and handle them appropriately within an error handling middleware:

```js
import { NotFoundError, UnauthorizedError } from '@hyperflake/http-errors';

function retrieveUser(req, res, next) {
    if (!req.user) {
        throw new UnauthorizedError("Authentication required to access this resource.");
    }

    const user = findUserById(req.params.userId);
    if (!user) {
        throw new NotFoundError("User not found.");
    }

    res.send(user);
}

// Error handling middleware
app.use((err, req, res, next) => {
    if (err instanceof HttpError) {
        res.status(err.status).json({ message: err.message });
    } else {
        res.status(500).json({ message: "An unexpected error occurred." });
    }
});

```

This approach allows your application to handle exceptions cleanly and maintain consistent API response standards.


## License

This project is open-sourced under the ISC License.