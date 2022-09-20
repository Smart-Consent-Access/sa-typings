"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicySummaryDTO = void 0;
class PolicySummaryDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PolicySummaryDTO.attributeTypeMap;
    }
}
exports.PolicySummaryDTO = PolicySummaryDTO;
PolicySummaryDTO.discriminator = undefined;
PolicySummaryDTO.attributeTypeMap = [
    {
        "name": "reqServiceProviderId",
        "baseName": "reqServiceProviderId",
        "type": "string",
        "format": ""
    },
    {
        "name": "reqPrincipalId",
        "baseName": "reqPrincipalId",
        "type": "string",
        "format": ""
    },
    {
        "name": "consServiceProviderId",
        "baseName": "consServiceProviderId",
        "type": "string",
        "format": ""
    },
    {
        "name": "consPrincipalId",
        "baseName": "consPrincipalId",
        "type": "string",
        "format": ""
    },
    {
        "name": "actions",
        "baseName": "actions",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "resources",
        "baseName": "resources",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<string>",
        "format": ""
    }
];
//# sourceMappingURL=PolicySummaryDTO.js.map