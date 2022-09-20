"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionTemplateDTO = void 0;
class ConditionTemplateDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ConditionTemplateDTO.attributeTypeMap;
    }
}
exports.ConditionTemplateDTO = ConditionTemplateDTO;
ConditionTemplateDTO.discriminator = undefined;
ConditionTemplateDTO.attributeTypeMap = [
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
//# sourceMappingURL=ConditionTemplateDTO.js.map