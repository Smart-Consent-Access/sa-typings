"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionTemplateDTO = void 0;
class ActionTemplateDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ActionTemplateDTO.attributeTypeMap;
    }
}
exports.ActionTemplateDTO = ActionTemplateDTO;
ActionTemplateDTO.discriminator = undefined;
ActionTemplateDTO.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
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
        "name": "version",
        "baseName": "version",
        "type": "number",
        "format": "double"
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
        "name": "status",
        "baseName": "status",
        "type": "string",
        "format": ""
    },
    {
        "name": "resourceTemplates",
        "baseName": "resourceTemplates",
        "type": "Array<ResourceTemplateDTO>",
        "format": ""
    },
    {
        "name": "conditionTemplates",
        "baseName": "conditionTemplates",
        "type": "Array<ConditionTemplateDTO>",
        "format": ""
    }
];
//# sourceMappingURL=ActionTemplateDTO.js.map