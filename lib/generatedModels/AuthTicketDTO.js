"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthTicketDTO = void 0;
class AuthTicketDTO {
    constructor() {
    }
    static getAttributeTypeMap() {
        return AuthTicketDTO.attributeTypeMap;
    }
}
exports.AuthTicketDTO = AuthTicketDTO;
AuthTicketDTO.discriminator = undefined;
AuthTicketDTO.attributeTypeMap = [
    {
        "name": "authTicket",
        "baseName": "authTicket",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=AuthTicketDTO.js.map