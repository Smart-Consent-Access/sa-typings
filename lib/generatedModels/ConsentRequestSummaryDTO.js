"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentRequestSummaryDTO = void 0;
class ConsentRequestSummaryDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ConsentRequestSummaryDTO.attributeTypeMap;
    }
}
exports.ConsentRequestSummaryDTO = ConsentRequestSummaryDTO;
ConsentRequestSummaryDTO.discriminator = undefined;
ConsentRequestSummaryDTO.attributeTypeMap = [
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
        "name": "consents",
        "baseName": "consents",
        "type": "Array<ConsentSummaryDTO>",
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
        "type": "ConsentRequestSummaryDTOResponseTotalStatusEnum",
        "format": ""
    },
    {
        "name": "numAffectedUsers",
        "baseName": "numAffectedUsers",
        "type": "number",
        "format": "double"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date",
        "format": "date-time"
    }
];
//# sourceMappingURL=ConsentRequestSummaryDTO.js.map