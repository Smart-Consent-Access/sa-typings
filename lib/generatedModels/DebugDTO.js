"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugDTO = void 0;
class DebugDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return DebugDTO.attributeTypeMap;
    }
}
exports.DebugDTO = DebugDTO;
DebugDTO.discriminator = undefined;
DebugDTO.attributeTypeMap = [
    {
        "name": "exampleKeyPair",
        "baseName": "exampleKeyPair",
        "type": "DebugDTOExampleKeyPair",
        "format": ""
    },
    {
        "name": "authTicket",
        "baseName": "authTicket",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=DebugDTO.js.map