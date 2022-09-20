import { LocalizedString } from ".";
import { SAJsonWebToken } from "./jwt";
export interface SAFlowJWTBase extends SAJsonWebToken {
    goal: "INITIATE" | "FINALIZE";
    type: "CONSENT_REQUEST" | "CONSENT_APPROVAL" | "CONSENT_REJECTION";
    kind: "FLOW";
    scope: ["serviceprovider:flow"];
}
export interface SAFlowJWTForSmartAccess extends SAFlowJWTBase {
    aud: "Association Orchestrator";
    reqServiceProviderId?: string;
    consServiceProviderId?: string;
    consReqId?: string;
    actions?: string[];
    resources?: string[];
    conditions?: string[];
}
export interface SAConsReqInitializeSp1ToSaJWT extends SAFlowJWTForSmartAccess {
    iss: string;
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
export interface ReceivedSAConsReqInitialization {
    ticket: SAConsReqInitializeSaToSp2JWT;
    actionString: ActionString[];
    resourceString: ResourceString[];
    conditionString: ConditionString[];
}
export interface SAConsReqFinalizeSp2ToSaJWT extends SAFlowJWTForSmartAccess {
    iss: string;
    goal: "FINALIZE";
    type: "CONSENT_REQUEST";
    actions: string[];
    resources: string[];
    conditions: string[];
    consReqId: string;
    numAffectedUsers: number;
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
export interface ReceivedSAConsReqFinalization {
    ticket: SAConsReqFinalizeSaToSp1JWT;
    actionString: ActionString[];
    resourceString: ResourceString[];
    conditionString: ConditionString[];
}
export interface SAConsApprovalInitializeSp2ToSaJWT extends SAFlowJWTForSmartAccess {
    iss: string;
    goal: "INITIATE";
    type: "CONSENT_APPROVAL" | "CONSENT_REJECTION";
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
    type: "CONSENT_APPROVAL" | "CONSENT_REJECTION";
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
export interface ReceivedSAConsInitialization {
    ticket: SAConsApprovalInitializeSaToSp1JWT;
    actionString: ActionString[];
    resourceString: ResourceString[];
    conditionString: ConditionString[];
}
export interface SAConsApprovalFinalizeSp1ToSaJWT extends SAFlowJWTForSmartAccess {
    iss: string;
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
export interface ActionString {
    tenant: string;
    system: string;
    actionName: string;
}
export interface ResourceString {
    tenant: string;
    system: string;
    resourceTags: Expression[];
}
export interface ConditionString {
    tenant: string;
    system: string;
    expression: Expression;
}
export interface Expression {
    key: string;
    value: string;
}
//# sourceMappingURL=flows.d.ts.map