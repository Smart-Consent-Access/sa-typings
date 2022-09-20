"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyConditionDTO = void 0;
class PolicyConditionDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PolicyConditionDTO.attributeTypeMap;
    }
}
exports.PolicyConditionDTO = PolicyConditionDTO;
PolicyConditionDTO.discriminator = undefined;
PolicyConditionDTO.attributeTypeMap = [
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
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=PolicyConditionDTO.js.map