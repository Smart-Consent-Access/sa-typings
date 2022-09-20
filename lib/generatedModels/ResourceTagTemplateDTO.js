"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceTagTemplateDTO = void 0;
class ResourceTagTemplateDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ResourceTagTemplateDTO.attributeTypeMap;
    }
}
exports.ResourceTagTemplateDTO = ResourceTagTemplateDTO;
ResourceTagTemplateDTO.discriminator = undefined;
ResourceTagTemplateDTO.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "policyResourceTemplateId",
        "baseName": "policyResourceTemplateId",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "validationType",
        "baseName": "validationType",
        "type": "string",
        "format": ""
    },
    {
        "name": "validationParams",
        "baseName": "validationParams",
        "type": "string",
        "format": ""
    },
    {
        "name": "ordno",
        "baseName": "ordno",
        "type": "number",
        "format": "double"
    },
    {
        "name": "pii",
        "baseName": "pii",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "e2eEncrypted",
        "baseName": "e2eEncrypted",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=ResourceTagTemplateDTO.js.map