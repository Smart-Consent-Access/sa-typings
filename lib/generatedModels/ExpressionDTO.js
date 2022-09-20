"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressionDTO = void 0;
class ExpressionDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ExpressionDTO.attributeTypeMap;
    }
}
exports.ExpressionDTO = ExpressionDTO;
ExpressionDTO.discriminator = undefined;
ExpressionDTO.attributeTypeMap = [
    {
        "name": "key",
        "baseName": "key",
        "type": "string",
        "format": ""
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=ExpressionDTO.js.map