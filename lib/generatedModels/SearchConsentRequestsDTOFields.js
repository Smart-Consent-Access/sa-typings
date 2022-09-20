"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchConsentRequestsDTOFields = void 0;
class SearchConsentRequestsDTOFields {
    constructor() {
    }
    static getAttributeTypeMap() {
        return SearchConsentRequestsDTOFields.attributeTypeMap;
    }
}
exports.SearchConsentRequestsDTOFields = SearchConsentRequestsDTOFields;
SearchConsentRequestsDTOFields.discriminator = undefined;
SearchConsentRequestsDTOFields.attributeTypeMap = [
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
        "name": "reqPrincipalId",
        "baseName": "reqPrincipalId",
        "type": "Array<string>",
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
//# sourceMappingURL=SearchConsentRequestsDTOFields.js.map