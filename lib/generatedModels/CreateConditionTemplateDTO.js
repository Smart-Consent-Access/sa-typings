"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConditionTemplateDTO = void 0;
class CreateConditionTemplateDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CreateConditionTemplateDTO.attributeTypeMap;
    }
}
exports.CreateConditionTemplateDTO = CreateConditionTemplateDTO;
CreateConditionTemplateDTO.discriminator = undefined;
CreateConditionTemplateDTO.attributeTypeMap = [
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
        "name": "name",
        "baseName": "name",
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
//# sourceMappingURL=CreateConditionTemplateDTO.js.map