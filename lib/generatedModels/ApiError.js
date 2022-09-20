"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = exports.ApiError = void 0;
class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.ApiError = ApiError;
class BadRequestError extends ApiError {
    constructor(message) {
        super(403, message);
    }
}
exports.BadRequestError = BadRequestError;
//# sourceMappingURL=ApiError.js.map