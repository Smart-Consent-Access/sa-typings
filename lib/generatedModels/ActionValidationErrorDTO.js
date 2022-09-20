"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionValidationErrorDTO = void 0;
class ActionValidationErrorDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ActionValidationErrorDTO.attributeTypeMap;
    }
}
exports.ActionValidationErrorDTO = ActionValidationErrorDTO;
ActionValidationErrorDTO.discriminator = undefined;
ActionValidationErrorDTO.attributeTypeMap = [
    {
        "name": "statusCode",
        "baseName": "statusCode",
        "type": "number",
        "format": "double"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string",
        "format": ""
    },
    {
        "name": "details",
        "baseName": "details",
        "type": "Array<string>",
        "format": ""
    }
];
//# sourceMappingURL=ActionValidationErrorDTO.js.map