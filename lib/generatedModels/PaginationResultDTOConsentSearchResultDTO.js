"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationResultDTOConsentSearchResultDTO = void 0;
class PaginationResultDTOConsentSearchResultDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PaginationResultDTOConsentSearchResultDTO.attributeTypeMap;
    }
}
exports.PaginationResultDTOConsentSearchResultDTO = PaginationResultDTOConsentSearchResultDTO;
PaginationResultDTOConsentSearchResultDTO.discriminator = undefined;
PaginationResultDTOConsentSearchResultDTO.attributeTypeMap = [
    {
        "name": "list",
        "baseName": "list",
        "type": "Array<ConsentSearchResultDTO>",
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
//# sourceMappingURL=PaginationResultDTOConsentSearchResultDTO.js.map