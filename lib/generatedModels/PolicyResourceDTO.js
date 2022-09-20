"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyResourceDTO = void 0;
class PolicyResourceDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PolicyResourceDTO.attributeTypeMap;
    }
}
exports.PolicyResourceDTO = PolicyResourceDTO;
PolicyResourceDTO.discriminator = undefined;
PolicyResourceDTO.attributeTypeMap = [
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
        "name": "tags",
        "baseName": "tags",
        "type": "Array<ResourceTagDTO>",
        "format": ""
    }
];
//# sourceMappingURL=PolicyResourceDTO.js.map