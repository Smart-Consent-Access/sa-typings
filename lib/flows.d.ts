import { LocalizedString } from ".";
import { SAJsonWebToken } from "./jwt";
export interface SAFlowJWTBase extends SAJsonWebToken {
    goal: "INITIATE" | "FINALIZE";
    type: "CONSENT_REQUEST" | "CONSENT_APPROVAL";
    kind: "FLOW";
    scope: ["serviceprovider:flow"];
}
export interface SAConsReqInitializeSp1ToSaJWT extends SAFlowJWTBase {
    iss: string;
    aud: "Association Orchestrator";
    goal: "INITIATE";
    type: "CONSENT_REQUEST";
    reqServiceProviderId: string;
    reqPrincipalName: string;
    reqPrincipalId: string;
    actions: string[];
    resources: string[];
    conditions: string[];
    consServiceProviderId: string;
    termsAndConditions: string;
    purpose: LocalizedString[];
}
export interface SAConsReqInitializeSaToSp2JWT extends SAFlowJWTBase {
    iss: "Association Orchestrator";
    aud: string;
    goal: "INITIATE";
    type: "CONSENT_REQUEST";
    reqServiceProviderId: string;
    reqPrincipalName: string;
    reqPrincipalId: string;
    actions: string[];
    resources: string[];
    conditions: string[];
    consReqId: string;
    reqServiceProviderName: string;
}
export interface SAConsReqFinalizeSp2ToSaJWT extends SAFlowJWTBase {
    iss: string;
    aud: "Association Orchestrator";
    goal: "FINALIZE";
    type: "CONSENT_REQUEST";
    actions: string[];
    resources: string[];
    conditions: string[];
    consReqId: string;
}
export interface SAConsReqFinalizeSaToSp1JWT extends SAFlowJWTBase {
    iss: "Association Orchestrator";
    aud: string;
    goal: "FINALIZE";
    type: "CONSENT_REQUEST";
    consServiceProviderId: string;
    actions: string[];
    resources: string[];
    conditions: string[];
    consReqId: string;
}
export interface SAConsApprovalInitializeSp2ToSaJWT extends SAFlowJWTBase {
    iss: string;
    aud: "Association Orchestrator";
    goal: "INITIATE";
    type: "CONSENT_APPROVAL";
    consReqId: string;
    consPrincipalName: string;
    consPrincipalId: string;
    actions: string[];
    resources: string[];
    conditions: string[];
}
export interface SAConsApprovalInitializeSaToSp1JWT extends SAFlowJWTBase {
    iss: "Association Orchestrator";
    aud: string;
    goal: "INITIATE";
    type: "CONSENT_APPROVAL";
    consReqId: string;
    consServiceProviderId: string;
    consPrincipalName: string;
    consPrincipalId: string;
    actions: string[];
    resources: string[];
    conditions: string[];
    consId: string;
    consServiceProviderName: string;
}
export interface SAConsApprovalFinalizeSp1ToSaJWT extends SAFlowJWTBase {
    iss: string;
    aud: "Association Orchestrator";
    goal: "FINALIZE";
    type: "CONSENT_APPROVAL";
    consReqId: string;
    consId: string;
}
export interface SAConsApprovalFinalizeSaToSp2JWT extends SAFlowJWTBase {
    iss: "Association Orchestrator";
    aud: string;
    goal: "FINALIZE";
    type: "CONSENT_APPROVAL";
    consReqId: string;
    consId: string;
}
//# sourceMappingURL=flows.d.ts.map