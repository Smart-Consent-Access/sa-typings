"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateActionTemplateDTO = void 0;
class CreateActionTemplateDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CreateActionTemplateDTO.attributeTypeMap;
    }
}
exports.CreateActionTemplateDTO = CreateActionTemplateDTO;
CreateActionTemplateDTO.discriminator = undefined;
CreateActionTemplateDTO.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number",
        "format": "double"
    },
    {
        "name": "serviceProviderId",
        "baseName": "serviceProviderId",
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
        "name": "description",
        "baseName": "description",
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
        "name": "resourceTemplates",
        "baseName": "resourceTemplates",
        "type": "Array<CreateResourceTemplateDTO>",
        "format": ""
    },
    {
        "name": "conditionTemplates",
        "baseName": "conditionTemplates",
        "type": "Array<CreateConditionTemplateDTO>",
        "format": ""
    }
];
//# sourceMappingURL=CreateActionTemplateDTO.js.map