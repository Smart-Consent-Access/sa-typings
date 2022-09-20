"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiErrorDTO = void 0;
class ApiErrorDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ApiErrorDTO.attributeTypeMap;
    }
}
exports.ApiErrorDTO = ApiErrorDTO;
ApiErrorDTO.discriminator = undefined;
ApiErrorDTO.attributeTypeMap = [
    {
        "name": "statusCode",
        "baseName": "statusCode",
        "type": "number",
        "format": "double"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=ApiErrorDTO.js.map