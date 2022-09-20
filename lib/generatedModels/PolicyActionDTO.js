"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyActionDTO = void 0;
class PolicyActionDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PolicyActionDTO.attributeTypeMap;
    }
}
exports.PolicyActionDTO = PolicyActionDTO;
PolicyActionDTO.discriminator = undefined;
PolicyActionDTO.attributeTypeMap = [
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
        "name": "action",
        "baseName": "action",
        "type": "string",
        "format": ""
    },
    {
        "name": "effect",
        "baseName": "effect",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=PolicyActionDTO.js.map