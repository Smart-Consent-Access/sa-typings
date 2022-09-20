"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentRequestSearchResultDTOConsents = void 0;
class ConsentRequestSearchResultDTOConsents {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ConsentRequestSearchResultDTOConsents.attributeTypeMap;
    }
}
exports.ConsentRequestSearchResultDTOConsents = ConsentRequestSearchResultDTOConsents;
ConsentRequestSearchResultDTOConsents.discriminator = undefined;
ConsentRequestSearchResultDTOConsents.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "ConsentType",
        "format": ""
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=ConsentRequestSearchResultDTOConsents.js.map