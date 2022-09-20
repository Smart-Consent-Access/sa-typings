"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceTemplateDTO = void 0;
class ResourceTemplateDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ResourceTemplateDTO.attributeTypeMap;
    }
}
exports.ResourceTemplateDTO = ResourceTemplateDTO;
ResourceTemplateDTO.discriminator = undefined;
ResourceTemplateDTO.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "policyActionTemplateId",
        "baseName": "policyActionTemplateId",
        "type": "string",
        "format": ""
    },
    {
        "name": "tenantName",
        "baseName": "tenantName",
        "type": "string",
        "format": ""
    },
    {
        "name": "systemName",
        "baseName": "systemName",
        "type": "string",
        "format": ""
    },
    {
        "name": "resourceTagTemplates",
        "baseName": "resourceTagTemplates",
        "type": "Array<ResourceTagTemplateDTO>",
        "format": ""
    }
];
//# sourceMappingURL=ResourceTemplateDTO.js.map