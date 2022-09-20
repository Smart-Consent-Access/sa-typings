"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationErrorDTO = void 0;
class ValidationErrorDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ValidationErrorDTO.attributeTypeMap;
    }
}
exports.ValidationErrorDTO = ValidationErrorDTO;
ValidationErrorDTO.discriminator = undefined;
ValidationErrorDTO.attributeTypeMap = [
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
    },
    {
        "name": "details",
        "baseName": "details",
        "type": "any",
        "format": ""
    }
];
//# sourceMappingURL=ValidationErrorDTO.js.map