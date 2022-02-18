import { SAConsReqInitializeSaToSp2JWT, LocalizedString } from ".";
export interface SAEmbeddedForm {
    form_type: 'CONSENT_REQUEST_FORM' | 'CONSENT_APPROVAL_FORM';
    requester_service_name: string;
    requester_friendly_name: string;
    requester_icon_url: string;
    consenter_service_name: string;
    consenter_friendly_name: string;
    consenter_icon_url: string;
    policy_requests: SAEmbeddedFormPolicy[];
}
interface SAEmbeddedFormPolicy {
    action_requests: SAEmbeddedFormPolicyAction[];
    resource_requests: SAEmbeddedFormPolicyNode[];
    condition_requests: SAEmbeddedFormPolicyCondition[];
    purpose: LocalizedString[];
    terms_and_conditions: string;
    optional: boolean;
}
export interface SAEmbeddedFormPolicyAction {
    action_friendly_name: LocalizedString[];
    action_friendly_description?: LocalizedString[];
    action_id: string;
    optional: boolean;
    action_icon_url: string;
}
export interface SAEmbeddedFormPolicyNode {
    node_friendly_name: LocalizedString[];
    node_icon_url: string;
    node_type: "Resource" | "Folder";
}
export interface SAEmbeddedFormPolicyFolder extends SAEmbeddedFormPolicyNode {
    child_nodes: SAEmbeddedFormPolicyNode[];
    node_type: "Folder";
}
export interface SAEmbeddedFormPolicyResource extends SAEmbeddedFormPolicyNode {
    resource_type_name: LocalizedString[];
    resource_id: string;
    optional: boolean;
    node_type: "Resource";
}
interface SAEmbeddedFormPolicyCondition {
    condition_friendly_name: LocalizedString[];
    condition_id: string;
    optional: boolean;
}
export interface EmbeddedFormTokenData {
    cr: ConsentRequest | SAConsReqInitializeSaToSp2JWT;
    type: 'SA_EMB_CONS_APPR_FORM' | 'SA_EMB_CONS_REQ_FORM';
    iss: string;
    AUD: 'AOEMB';
}
export interface ConsentRequest {
    actions: string[];
    approvalUrl?: string;
    conditions: string[];
    consServiceProviderId: string;
    consents: any[];
    consReqId: string;
    reqPrincipalId: string;
    reqPrincipalName: string;
    reqServiceProviderId: string;
    reqServiceProviderName: string;
    termsAndConditions: string;
    resources: string[];
    purpose: LocalizedString[];
}
export interface MakeConsentFormResponse {
    form: SAEmbeddedForm;
}
export interface MakeConsentFormRequest {
    consReqFormToken: string;
}
export interface FinalizeConsentApprovalSelectionRequest {
    consReqFormToken: string;
    resources?: string[];
    conditions?: string[];
    actions?: string[];
}
export interface FinalizeConsentRequestSelectionRequest {
    consReqFormToken: string;
}
export interface FinalizeConsentSelectionResponse {
    finalizeUrl: string;
}
export interface EmbeddableConsentResource {
    consReqTicket: string;
}
export declare const SA_EMBEDDED_EVENT_MESSAGE_DELIMITER = "::";
export declare const AOEmbeddedEvents: {
    INIT: string;
    SUBMITTING: string;
    COMPLETE: string;
    ERROR: string;
};
export {};
//# sourceMappingURL=embedded.d.ts.map