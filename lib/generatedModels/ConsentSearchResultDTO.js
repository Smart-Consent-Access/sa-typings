"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentSearchResultDTO = void 0;
class ConsentSearchResultDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ConsentSearchResultDTO.attributeTypeMap;
    }
}
exports.ConsentSearchResultDTO = ConsentSearchResultDTO;
ConsentSearchResultDTO.discriminator = undefined;
ConsentSearchResultDTO.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "reqServiceProviderId",
        "baseName": "reqServiceProviderId",
        "type": "string",
        "format": ""
    },
    {
        "name": "reqServiceProviderName",
        "baseName": "reqServiceProviderName",
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
        "name": "consPrincipalName",
        "baseName": "consPrincipalName",
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
        "name": "consServiceProviderName",
        "baseName": "consServiceProviderName",
        "type": "string",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "ConsentType",
        "format": ""
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "string",
        "format": ""
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "string",
        "format": ""
    },
    {
        "name": "consentRequestId",
        "baseName": "consentRequestId",
        "type": "string",
        "format": ""
    },
    {
        "name": "policies",
        "baseName": "policies",
        "type": "Array<PolicyDTO>",
        "format": ""
    }
];
//# sourceMappingURL=ConsentSearchResultDTO.js.map