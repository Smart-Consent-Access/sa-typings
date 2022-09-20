export declare class ApiError extends Error {
    statusCode: number;
    constructor(statusCode: number, message: string);
}
export declare class BadRequestError extends ApiError {
    constructor(message: string);
}
//# sourceMappingURL=ApiError.d.ts.map