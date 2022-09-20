"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionStringDTO = void 0;
class ActionStringDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ActionStringDTO.attributeTypeMap;
    }
}
exports.ActionStringDTO = ActionStringDTO;
ActionStringDTO.discriminator = undefined;
ActionStringDTO.attributeTypeMap = [
    {
        "name": "tenant",
        "baseName": "tenant",
        "type": "string",
        "format": ""
    },
    {
        "name": "system",
        "baseName": "system",
        "type": "string",
        "format": ""
    },
    {
        "name": "actionName",
        "baseName": "actionName",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=ActionStringDTO.js.map