"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceTagDTO = void 0;
class ResourceTagDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ResourceTagDTO.attributeTypeMap;
    }
}
exports.ResourceTagDTO = ResourceTagDTO;
ResourceTagDTO.discriminator = undefined;
ResourceTagDTO.attributeTypeMap = [
    {
        "name": "key",
        "baseName": "key",
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
//# sourceMappingURL=ResourceTagDTO.js.map