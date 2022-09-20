"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchConsentsDTOFields = void 0;
class SearchConsentsDTOFields {
    constructor() {
    }
    static getAttributeTypeMap() {
        return SearchConsentsDTOFields.attributeTypeMap;
    }
}
exports.SearchConsentsDTOFields = SearchConsentsDTOFields;
SearchConsentsDTOFields.discriminator = undefined;
SearchConsentsDTOFields.attributeTypeMap = [
    {
        "name": "condition",
        "baseName": "condition",
        "type": "Array<ConditionStringDTO>",
        "format": ""
    },
    {
        "name": "resourceTag",
        "baseName": "resourceTag",
        "type": "Array<ExpressionDTO>",
        "format": ""
    },
    {
        "name": "action",
        "baseName": "action",
        "type": "ActionStringDTO",
        "format": ""
    },
    {
        "name": "consPrincipalId",
        "baseName": "consPrincipalId",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
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
        "name": "stopCreatedAt",
        "baseName": "stopCreatedAt",
        "type": "string",
        "format": ""
    },
    {
        "name": "startCreatedAt",
        "baseName": "startCreatedAt",
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
        "name": "consServiceProviderId",
        "baseName": "consServiceProviderId",
        "type": "string",
        "format": ""
    },
    {
        "name": "reqServiceProviderId",
        "baseName": "reqServiceProviderId",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=SearchConsentsDTOFields.js.map