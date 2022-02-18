import { SAJsonWebToken } from "./jwt";
export interface SAAuthTicket extends SAJsonWebToken {
    kind: "AUTH_TICKET";
    scope: ["serviceprovider:ticket"];
    reqServiceProviderId: string;
    reqPrincipalId: string;
    consServiceProviderId: string;
    consPrincipalId: string;
    actions: string[];
    resources: string[];
    conditions: string[];
}
//# sourceMappingURL=authticket.d.ts.map