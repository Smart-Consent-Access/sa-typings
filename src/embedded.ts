/* eslint-disable camelcase */

import { SAConsReqInitializeSaToSp2JWT, LocalizedString } from ".";

/**
 * This is the AO Embedded form structure used to describe both *Request* and *Approval* scenario
 * Note that the structure/data itself is produced by the *consenting* service (e.g. Smart Family) for both the request and the approval scenario.
 */
 export interface SAEmbeddedForm {
  form_type: 'CONSENT_REQUEST_FORM' | 'CONSENT_APPROVAL_FORM';
  requester_service_name: string; // CleanHome
  requester_friendly_name: string; // Gunilla (sales employee)
  requester_icon_url: string;
  consenter_service_name: string; // Telia Smart Family
  consenter_friendly_name: string; // Johan D (SF user)
  consenter_icon_url: string;
  display_affected_users: LocalizedString[]; // This will affect 1 household

  // In the MVP2 demo, the doorlock consent requests "fits" in a single policy.
  // But array (below) is needed for more complex scenarios, e.g combination of multiple unrelated actions/resources.
  policy_requests: SAEmbeddedFormPolicy[];
}

/**
 * This "Form Policy" represents the info needed to display a form for a request or approval of consent.
 */
interface SAEmbeddedFormPolicy {
  action_requests: SAEmbeddedFormPolicyAction[];
  resource_requests: SAEmbeddedFormPolicyNode[];
  condition_requests: SAEmbeddedFormPolicyCondition[];
  purpose: LocalizedString[];
  terms_and_conditions: string;
  optional: boolean;
}

/**
 * This represents a form section for an action.
 * The friendly name is show to the user, and the id is what is stored as a reference in the policy request/approval.
 */
export interface SAEmbeddedFormPolicyAction {
  action_friendly_name: LocalizedString[];
  action_friendly_description?: LocalizedString[];
  action_id: string;
  optional: boolean;
  action_icon_url: string;
}

/**
 * This represents a node in the resource hierarchy which can either be a leaf resource or a folder
 * containing other nodes
 * The friendly name and icon can be shown to the user
 */
export interface SAEmbeddedFormPolicyNode {
  node_friendly_name: LocalizedString[];
  node_icon_url: string;
  node_type: "Resource" | "Folder";
}

/**
 * This represents a folder that contains other nodes in the resource hierarchy
 */
export interface SAEmbeddedFormPolicyFolder extends SAEmbeddedFormPolicyNode {
  child_nodes: SAEmbeddedFormPolicyNode[];
  node_type: "Folder"
}

/**
 * This represents a form section for a resource.
 * The friendly name is show to the user, and the id is what is stored as a reference in the policy request/approval.
 */
export interface SAEmbeddedFormPolicyResource extends SAEmbeddedFormPolicyNode {
  resource_type_name: LocalizedString[];
  resource_id: string;
  optional: boolean;
  node_type: "Resource";
}

/**
 * This represents a form section for a condition.
 * The friendly name is show to the user, and the id is what is stored as a reference in the policy request/approval.
 */
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
  consPrincipalId?: string;
}

export interface ConsentRequest {
  actions: string[];
  approvalUrl?: string;
  approvalToken?: string;
  conditions: string[];
  consServiceProviderId: string;
  consents: any[]; // TODO: move type for consents from sdk to sa-typings
  consReqId: string;
  reqPrincipalId: string;
  reqPrincipalName: string;
  reqServiceProviderId: string;
  reqServiceProviderName: string;
  termsAndConditions: string;
  resources: string[];
  purpose: LocalizedString[];
  numApproved: number;
  numRejected: number;
  responseTotalStatus: "PENDING" | "COMPLETED";
  numAffectedUsers: number;
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

export interface FinalizeConsentRejectionSelectionRequest {
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
  consReqTicket: string
}

export const SA_EMBEDDED_EVENT_MESSAGE_DELIMITER = '::';

const SA_EMBEDDED_EVENT_PREFIX = 'AO_EMBEDDED';

export const AOEmbeddedEvents = {
  INIT: `${SA_EMBEDDED_EVENT_PREFIX}${SA_EMBEDDED_EVENT_MESSAGE_DELIMITER}INIT`,
  SUBMITTING: `${SA_EMBEDDED_EVENT_PREFIX}${SA_EMBEDDED_EVENT_MESSAGE_DELIMITER}SUBMITTING`,
  COMPLETE: `${SA_EMBEDDED_EVENT_PREFIX}${SA_EMBEDDED_EVENT_MESSAGE_DELIMITER}COMPLETE`,
  ERROR: `${SA_EMBEDDED_EVENT_PREFIX}${SA_EMBEDDED_EVENT_MESSAGE_DELIMITER}ERROR`
}
