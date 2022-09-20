"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegalEntityDTO = void 0;
class LegalEntityDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return LegalEntityDTO.attributeTypeMap;
    }
}
exports.LegalEntityDTO = LegalEntityDTO;
LegalEntityDTO.discriminator = undefined;
LegalEntityDTO.attributeTypeMap = [
    {
        "name": "originServiceProviderId",
        "baseName": "originServiceProviderId",
        "type": "string",
        "format": ""
    },
    {
        "name": "originEntityId",
        "baseName": "originEntityId",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=LegalEntityDTO.js.map