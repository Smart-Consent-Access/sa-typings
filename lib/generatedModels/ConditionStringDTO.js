"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionStringDTO = void 0;
class ConditionStringDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ConditionStringDTO.attributeTypeMap;
    }
}
exports.ConditionStringDTO = ConditionStringDTO;
ConditionStringDTO.discriminator = undefined;
ConditionStringDTO.attributeTypeMap = [
    {
        "name": "tenant",
        "baseName": "tenant",
        "type": "string",
        "format": ""
    },
    {
        "name": "system",
        "baseName": "system",
        "type": "string",
        "format": ""
    },
    {
        "name": "expression",
        "baseName": "expression",
        "type": "ExpressionDTO",
        "format": ""
    }
];
//# sourceMappingURL=ConditionStringDTO.js.map