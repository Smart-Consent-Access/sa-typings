"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceProviderDTO = void 0;
class ServiceProviderDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ServiceProviderDTO.attributeTypeMap;
    }
}
exports.ServiceProviderDTO = ServiceProviderDTO;
ServiceProviderDTO.discriminator = undefined;
ServiceProviderDTO.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
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
        "name": "iconUrl",
        "baseName": "iconUrl",
        "type": "string",
        "format": ""
    },
    {
        "name": "publicKey",
        "baseName": "publicKey",
        "type": "string",
        "format": ""
    },
    {
        "name": "initiateConsentRequestUrl",
        "baseName": "initiateConsentRequestUrl",
        "type": "string",
        "format": ""
    },
    {
        "name": "finalizeConsentRequestUrl",
        "baseName": "finalizeConsentRequestUrl",
        "type": "string",
        "format": ""
    },
    {
        "name": "initiateConsentUrl",
        "baseName": "initiateConsentUrl",
        "type": "string",
        "format": ""
    },
    {
        "name": "finalizeConsentUrl",
        "baseName": "finalizeConsentUrl",
        "type": "string",
        "format": ""
    },
    {
        "name": "allowUndefinedActions",
        "baseName": "allowUndefinedActions",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=ServiceProviderDTO.js.map