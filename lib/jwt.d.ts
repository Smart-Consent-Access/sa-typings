export declare type ScopeType = "serviceprovider:info" | "serviceprovider:flow" | "serviceprovider:ticket";
export declare type KindType = "API_AUTHORIZATION" | "FLOW" | "AUTH_TICKET";
export interface SAJsonWebToken {
    aud: "Association Orchestrator" | string;
    iss: "Association Orchestrator" | string;
    iat: number;
    exp: number;
    kind: KindType;
    scope: ScopeType[];
}
export interface SAAuthJwt extends SAJsonWebToken {
    kind: "API_AUTHORIZATION";
}
//# sourceMappingURL=jwt.d.ts.map