"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentSummaryDTO = void 0;
class ConsentSummaryDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ConsentSummaryDTO.attributeTypeMap;
    }
}
exports.ConsentSummaryDTO = ConsentSummaryDTO;
ConsentSummaryDTO.discriminator = undefined;
ConsentSummaryDTO.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
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
        "name": "policy",
        "baseName": "policy",
        "type": "Array<PolicySummaryDTO>",
        "format": ""
    }
];
//# sourceMappingURL=ConsentSummaryDTO.js.map