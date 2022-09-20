"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentRequestTokenBody = void 0;
class ConsentRequestTokenBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ConsentRequestTokenBody.attributeTypeMap;
    }
}
exports.ConsentRequestTokenBody = ConsentRequestTokenBody;
ConsentRequestTokenBody.discriminator = undefined;
ConsentRequestTokenBody.attributeTypeMap = [
    {
        "name": "requestingToken",
        "baseName": "requestingToken",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=ConsentRequestTokenBody.js.map