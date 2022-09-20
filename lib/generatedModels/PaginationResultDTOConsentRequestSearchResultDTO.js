"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationResultDTOConsentRequestSearchResultDTO = void 0;
class PaginationResultDTOConsentRequestSearchResultDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PaginationResultDTOConsentRequestSearchResultDTO.attributeTypeMap;
    }
}
exports.PaginationResultDTOConsentRequestSearchResultDTO = PaginationResultDTOConsentRequestSearchResultDTO;
PaginationResultDTOConsentRequestSearchResultDTO.discriminator = undefined;
PaginationResultDTOConsentRequestSearchResultDTO.attributeTypeMap = [
    {
        "name": "list",
        "baseName": "list",
        "type": "Array<ConsentRequestSearchResultDTO>",
        "format": ""
    },
    {
        "name": "totalCount",
        "baseName": "totalCount",
        "type": "number",
        "format": "double"
    },
    {
        "name": "taken",
        "baseName": "taken",
        "type": "number",
        "format": "double"
    }
];
//# sourceMappingURL=PaginationResultDTOConsentRequestSearchResultDTO.js.map