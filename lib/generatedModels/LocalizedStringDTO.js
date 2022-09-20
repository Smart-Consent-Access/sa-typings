"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalizedStringDTO = void 0;
class LocalizedStringDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return LocalizedStringDTO.attributeTypeMap;
    }
}
exports.LocalizedStringDTO = LocalizedStringDTO;
LocalizedStringDTO.discriminator = undefined;
LocalizedStringDTO.attributeTypeMap = [
    {
        "name": "locale",
        "baseName": "locale",
        "type": "string",
        "format": ""
    },
    {
        "name": "format",
        "baseName": "format",
        "type": "string",
        "format": ""
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=LocalizedStringDTO.js.map