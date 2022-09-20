"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchConsentsDTOSort = void 0;
class SearchConsentsDTOSort {
    constructor() {
    }
    static getAttributeTypeMap() {
        return SearchConsentsDTOSort.attributeTypeMap;
    }
}
exports.SearchConsentsDTOSort = SearchConsentsDTOSort;
SearchConsentsDTOSort.discriminator = undefined;
SearchConsentsDTOSort.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "SearchConsentsDTOSortStatusEnum",
        "format": ""
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "SearchConsentsDTOSortUpdatedAtEnum",
        "format": ""
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "SearchConsentsDTOSortCreatedAtEnum",
        "format": ""
    }
];
//# sourceMappingURL=SearchConsentsDTOSort.js.map