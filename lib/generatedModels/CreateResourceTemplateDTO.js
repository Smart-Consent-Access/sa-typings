"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateResourceTemplateDTO = void 0;
class CreateResourceTemplateDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CreateResourceTemplateDTO.attributeTypeMap;
    }
}
exports.CreateResourceTemplateDTO = CreateResourceTemplateDTO;
CreateResourceTemplateDTO.discriminator = undefined;
CreateResourceTemplateDTO.attributeTypeMap = [
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
        "type": "Array<CreateResourceTagTemplateDTO>",
        "format": ""
    }
];
//# sourceMappingURL=CreateResourceTemplateDTO.js.map