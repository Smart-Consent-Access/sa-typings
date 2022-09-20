"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleProviderConsentDTO = void 0;
class SingleProviderConsentDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return SingleProviderConsentDTO.attributeTypeMap;
    }
}
exports.SingleProviderConsentDTO = SingleProviderConsentDTO;
SingleProviderConsentDTO.discriminator = undefined;
SingleProviderConsentDTO.attributeTypeMap = [
    {
        "name": "reqPrincipalName",
        "baseName": "reqPrincipalName",
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
        "name": "consPrincipalName",
        "baseName": "consPrincipalName",
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
    },
    {
        "name": "termsAndConditions",
        "baseName": "termsAndConditions",
        "type": "string",
        "format": ""
    },
    {
        "name": "consentedAt",
        "baseName": "consentedAt",
        "type": "number",
        "format": "double"
    }
];
//# sourceMappingURL=SingleProviderConsentDTO.js.map