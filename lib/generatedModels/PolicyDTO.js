"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyDTO = void 0;
class PolicyDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PolicyDTO.attributeTypeMap;
    }
}
exports.PolicyDTO = PolicyDTO;
PolicyDTO.discriminator = undefined;
PolicyDTO.attributeTypeMap = [
    {
        "name": "actions",
        "baseName": "actions",
        "type": "Array<PolicyActionDTO>",
        "format": ""
    },
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<PolicyConditionDTO>",
        "format": ""
    },
    {
        "name": "resources",
        "baseName": "resources",
        "type": "Array<PolicyResourceDTO>",
        "format": ""
    }
];
//# sourceMappingURL=PolicyDTO.js.map