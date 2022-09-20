"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentRequestSearchResultDTO = void 0;
class ConsentRequestSearchResultDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ConsentRequestSearchResultDTO.attributeTypeMap;
    }
}
exports.ConsentRequestSearchResultDTO = ConsentRequestSearchResultDTO;
ConsentRequestSearchResultDTO.discriminator = undefined;
ConsentRequestSearchResultDTO.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
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
        "name": "purpose",
        "baseName": "purpose",
        "type": "Array<LocalizedStringDTO>",
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
        "name": "reqPrincipalId",
        "baseName": "reqPrincipalId",
        "type": "string",
        "format": ""
    },
    {
        "name": "reqPrincipalName",
        "baseName": "reqPrincipalName",
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
        "name": "numApproved",
        "baseName": "numApproved",
        "type": "number",
        "format": "double"
    },
    {
        "name": "numRejected",
        "baseName": "numRejected",
        "type": "number",
        "format": "double"
    },
    {
        "name": "responseTotalStatus",
        "baseName": "responseTotalStatus",
        "type": "ConsentRequestSearchResultDTOResponseTotalStatusEnum",
        "format": ""
    },
    {
        "name": "numAffectedUsers",
        "baseName": "numAffectedUsers",
        "type": "number",
        "format": "double"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string",
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
        "name": "consents",
        "baseName": "consents",
        "type": "Array<ConsentRequestSearchResultDTOConsents>",
        "format": ""
    }
];
//# sourceMappingURL=ConsentRequestSearchResultDTO.js.map