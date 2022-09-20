"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchConsentRequestsDTO = void 0;
class SearchConsentRequestsDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return SearchConsentRequestsDTO.attributeTypeMap;
    }
}
exports.SearchConsentRequestsDTO = SearchConsentRequestsDTO;
SearchConsentRequestsDTO.discriminator = undefined;
SearchConsentRequestsDTO.attributeTypeMap = [
    {
        "name": "skip",
        "baseName": "skip",
        "type": "number",
        "format": "double"
    },
    {
        "name": "take",
        "baseName": "take",
        "type": "number",
        "format": "double"
    },
    {
        "name": "searchQuery",
        "baseName": "searchQuery",
        "type": "string",
        "format": ""
    },
    {
        "name": "fields",
        "baseName": "fields",
        "type": "SearchConsentRequestsDTOFields",
        "format": ""
    },
    {
        "name": "sort",
        "baseName": "sort",
        "type": "SearchConsentsDTOSort",
        "format": ""
    }
];
//# sourceMappingURL=SearchConsentRequestsDTO.js.map