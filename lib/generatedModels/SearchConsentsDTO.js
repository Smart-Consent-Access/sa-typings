"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchConsentsDTO = void 0;
class SearchConsentsDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return SearchConsentsDTO.attributeTypeMap;
    }
}
exports.SearchConsentsDTO = SearchConsentsDTO;
SearchConsentsDTO.discriminator = undefined;
SearchConsentsDTO.attributeTypeMap = [
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
        "type": "SearchConsentsDTOFields",
        "format": ""
    },
    {
        "name": "sort",
        "baseName": "sort",
        "type": "SearchConsentsDTOSort",
        "format": ""
    }
];
//# sourceMappingURL=SearchConsentsDTO.js.map