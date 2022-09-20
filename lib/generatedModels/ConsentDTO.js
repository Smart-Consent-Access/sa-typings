"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentDTO = void 0;
class ConsentDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ConsentDTO.attributeTypeMap;
    }
}
exports.ConsentDTO = ConsentDTO;
ConsentDTO.discriminator = undefined;
ConsentDTO.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
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
        "name": "type",
        "baseName": "type",
        "type": "ConsentType",
        "format": ""
    },
    {
        "name": "legalEntity",
        "baseName": "legalEntity",
        "type": "LegalEntityDTO",
        "format": ""
    },
    {
        "name": "policy",
        "baseName": "policy",
        "type": "Array<PolicyDTO>",
        "format": ""
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date",
        "format": "date-time"
    }
];
//# sourceMappingURL=ConsentDTO.js.map