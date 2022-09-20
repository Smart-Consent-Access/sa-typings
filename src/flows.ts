
import { LocalizedString } from ".";
import { SAJsonWebToken } from "./jwt";

/**
 * Base: Common structure for all AH flow JWT's.
 */
export interface SAFlowJWTBase extends SAJsonWebToken {
  /** Shows the direction of flow for user. Flows from system A->B with initialization, and back from B->A with finalization */
  goal: "INITIATE" | "FINALIZE";

  /** The type of flow - what is being created. ConsentRequest or Consent (Approval/Rejection)  */
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

//
// Consent Requests
//

/**
 * Flow token for when SP1 wants to initialize a consent request against AH
 * SP1 --> AH : Initialize Consent Request
 *
 * @example {
    "kind": "FLOW",
    "scope": ["serviceprovider:flow"],
    "exp": 1639036554868,
    "iat": 1639032954868,
    "iss": "a0e3b3dd-3d00-4c59-a4ad-40361ea96931",
    "aud": "Association Orchestrator",
    "goal": "INITIATE",
    "type": "CONSENT_REQUEST",
    "reqServiceProviderId": "a0e3b3dd-3d00-4c59-a4ad-40361ea96931",
    "reqPrincipalId": "0007651a-e15a-4195-8d06-2f1dd8a64480",
    "reqPrincipalName": "Sim-Gunilla",
    "actions": ["telia:smartfamily/CreateDoorlockPin"],
    "resources": ["telia:smartfamily/RealEstate=*\/Building=*\/User=+46701234560/Family=*\/DeviceType=Doorlock/Device=*"],
    "conditions": ["telia:smartfamily/DayOfWeek=Tue", "telia:smartfamily/StartTime=10:00", "telia:smartfamily/EndTime=12:00"],
    "consServiceProviderId": "080f264e-99f6-49d3-938c-b8c2d93bf179",
    "termsAndConditions": "http://www.google.se",
    "purpose": [
      {
        "locale": "sv_SE",
        "format": "markdown",
        "value": "Hej! Vår städpersonal behöver komma in i din lägenhet för din bokade veckostädning. Hör gärna av dig till mig om du har frågor på [08-123 45 67](tel:+4681234567). mvh Peter"
      },
      {
        "locale": "en_US",
        "format": "markdown",
        "value": "Hello! Our cleaning personnel needs access to your apartement for your weekly cleaning. Please contact me if you have any questions on [08-123 45 67](tel:+4681234567). Regards Peter"
      }
    ]
  }
 */
export interface SAConsReqInitializeSp1ToSaJWT extends SAFlowJWTForSmartAccess {
  iss: string;
  goal: "INITIATE";
  type: "CONSENT_REQUEST";

  /** ServiceProvder making this request */
  reqServiceProviderId: string;
  /** Display name of who is making the request  */
  reqPrincipalName: string;
  /** SP1-internal id/ref of the legal entity making the request */
  reqPrincipalId: string;

  /** Requested actions */
  actions: string[];
  /** Requested resources */
  resources: string[];
  conditions: string[];

  /** The other ServiceProvider to make request against */
  consServiceProviderId: string;

  /** Terms and conditions link for this request */
  termsAndConditions: string;

  /** The purpose of this consent request (message from requester) */
  purpose: LocalizedString[];
}

/**
 * Flow token for when AH passes on the desire to initialize a consent request towards SP2
 * AH --> SP2 : Initialize Consent Request
 * 
 * @example {
 *  "goal":"INITIATE",
    "type":"CONSENT_REQUEST",
    "consReqId":"22908842-c978-475e-88b1-0560606a4364",
    "reqServiceProviderId":"a0e3b3dd-3d00-4c59-a4ad-40361ea96931",
    "reqServiceProviderName":"AO Simulator",
    "reqPrincipalId":"0007651a-e15a-4195-8d06-2f1dd8a64480",
    "reqPrincipalName":"Sim-Gunilla",
    "actions":["telia:smartfamily/CreateDoorlockPin"],
    "resources":["telia:smartfamily/RealEstate=*\/Building=*\/User=+46701234560/Family=*\/DeviceType=Doorlock/Device=*"],
    "conditions":["telia:smartfamily/DayOfWeek=Tue","telia:smartfamily/StartTime=10:00","telia:smartfamily/EndTime=12:00"],
    "aud":"080f264e-99f6-49d3-938c-b8c2d93bf179",
    "iat":1639038175,
    "exp":1639038775,
    "iss":"Association Orchestrator"
 * }
 */
export interface SAConsReqInitializeSaToSp2JWT extends SAFlowJWTBase {
  iss: "Association Orchestrator"; // @TODO: This will be requester.id in response from req.initialize
  aud: string;
  goal: "INITIATE";
  type: "CONSENT_REQUEST";

  /** ServiceProvder making this request */
  reqServiceProviderId: string;
  /** Display name of who is making the request  */
  reqPrincipalName: string;
  /** SP1-internal id/ref of the legal entity making the request */
  reqPrincipalId: string;

  /** Requested actions */
  actions: string[];
  /** Requested resources */
  resources: string[];
  conditions: string[];

  /** ID of the new pending ConsentRequest created by Association Orchestrator during flow */
  consReqId: string;
  /** Display name of the requesting ServiceProvider */
  reqServiceProviderName: string;
}

export interface ReceivedSAConsReqInitialization {
  ticket: SAConsReqInitializeSaToSp2JWT,
  actionString: ActionString[],
  resourceString: ResourceString[],
  conditionString: ConditionString[],
}

/**
 * Flow token for when SP2 wants to finalize a consent request against AH
 * AH <-- SP2 : Finalize Consent Request
 * 
 * @example {
 *  "exp":1639040646,
 *  "iat":1639040046,
 *  "kind":"FLOW",
 *  "scope":["serviceprovider:flow"],
 *  "iss":"080f264e-99f6-49d3-938c-b8c2d93bf179",
 *  "aud":"Association Orchestrator",
 *  "goal":"FINALIZE",
 *  "type":"CONSENT_REQUEST",
 *  "actions":["telia:smartfamily/CreateDoorlockPin"],
 *  "resources":["telia:smartfamily/RealEstate=*\/Building=*\/User=+46701234560/Family=*\/DeviceType=Doorlock/Device=*"],
 *  "conditions":["telia:smartfamily/DayOfWeek=Tue","telia:smartfamily/StartTime=10:00","telia:smartfamily/EndTime=12:00"],
 *  "consReqId":"22908842-c978-475e-88b1-0560606a4364"
 * }
 */
export interface SAConsReqFinalizeSp2ToSaJWT extends SAFlowJWTForSmartAccess {
  iss: string;
  goal: "FINALIZE";
  type: "CONSENT_REQUEST";

  /** Actions approved by user */
  actions: string[];
  /** Resources approved by user */
  resources: string[];
  conditions: string[];

  /** ID of ConsentRequest as received from AH */
  consReqId: string;

  /** Estimated number of users affected*/
  numAffectedUsers: number;
}

/**
 * Flow token for when AH passes on the desire to finalize a consent request towards SP1
 * SP1 <-- AH : Finalize Consent Request
 * 
 * @example {
 *  "goal": "FINALIZE",
    "type": "CONSENT_REQUEST",
    "aud": "a0e3b3dd-3d00-4c59-a4ad-40361ea96931",
    "actions": [
      "telia:smartfamily/CreateDoorlockPin"
    ],
    "resources": [
      "telia:smartfamily/RealEstate=*\/Building=*\/User=+46701234560/Family=*\/DeviceType=Doorlock/Device=*"
    ],
    "conditions": [
      "telia:smartfamily/DayOfWeek=Tue",
      "telia:smartfamily/StartTime=10:00",
      "telia:smartfamily/EndTime=12:00"
    ],
    "consReqId": "22908842-c978-475e-88b1-0560606a4364",
    "numAffectedUsers": 1,
    "consServiceProviderId": "080f264e-99f6-49d3-938c-b8c2d93bf179",
    "iat": 1639041255,
    "exp": 1639041855,
    "iss": "Association Orchestrator"
 * }
 */
export interface SAConsReqFinalizeSaToSp1JWT extends SAFlowJWTBase {
  iss: "Association Orchestrator";
  aud: string;
  goal: "FINALIZE";
  type: "CONSENT_REQUEST";

  /** ServiceProvder finalizing this consent request */
  consServiceProviderId: string;

  /** Actions approved by user */
  actions: string[];
  /** Resources approved by user */
  resources: string[];
  conditions: string[];

  /** ID of ConsentRequest */
  consReqId: string;
}

export interface ReceivedSAConsReqFinalization {
  ticket: SAConsReqFinalizeSaToSp1JWT,
  actionString: ActionString[],
  resourceString: ResourceString[],
  conditionString: ConditionString[],
}

//
// Consent Approval
//

/**
 * Flow token for when SP2 wants to initialize a consent approval or rejection against SmartAccess
 * SA <-- SP2 : Initiate Consent Approval/Rejection
 * 
 * @example {
 *  "goal":"INITIATE",
 *  "type":"CONSENT_APPROVAL",
 *  "consReqId":"22908842-c978-475e-88b1-0560606a4364",
 *  "consPrincipalName": "Johan Deckmar",
 *  "consPrincipalId: "0007651a-e15a-4195-8d06-2f1dd8a64500",
 *  "actions":["telia:smartfamily/CreateDoorlockPin"],
 *  "resources":["telia:smartfamily/RealEstate=*\/Building=*\/User=+46701234560/Family=*\/DeviceType=Doorlock/Device=*"],
 *  "conditions":["telia:smartfamily/DayOfWeek=Tue","telia:smartfamily/StartTime=10:00","telia:smartfamily/EndTime=12:00"],
 *  "aud":"Association Orchestrator",
 *  "iat":1639038175,
 *  "exp":1639038775,
 *  "iss":"a0e3b3dd-3d00-4c59-a4ad-40361ea96931"
 * }
 */
export interface SAConsApprovalInitializeSp2ToSaJWT extends SAFlowJWTForSmartAccess {
  /** ServiceProvder making this consent approval */
  iss: string;
  goal: "INITIATE";
  /** Initiate an approval or a rejection */
  type: "CONSENT_APPROVAL" | "CONSENT_REJECTION";
  /** ID of ConsentRequest to approve */
  consReqId: string;

  /** Display name of who is making the consent approval  */
  consPrincipalName: string;
  /** SP2-internal id/ref of the legal entity making the consent approval */
  consPrincipalId: string;

  /** Actions approved or rejected by user */
  actions: string[];
  /** Resources approved or rejected by user */
  resources: string[];
  /** Conditions approved or rejected by user */
  conditions: string[];
}

/**
 * Flow token for when SA passes on the desire to initialize a consent approval or rejection towards SP1
 * SP1 <-- AH : Initiate Consent Approval/Rejection
 * 
 * @example {
 *  "goal":"INITIATE",
 *  "type":"CONSENT_APPROVAL",
 *  "consReqId": "22908842-c978-475e-88b1-0560606a4364",
 *  "consServiceProviderId": "080f264e-99f6-49d3-938c-b8c2d93bf179",
 *  "consServiceProviderName": "Smart Family",
 *  "consPrincipalName": "Johan Deckmar",
 *  "consPrincipalId: "0007651a-e15a-4195-8d06-2f1dd8a64500,
 *  "actions":["telia:smartfamily/CreateDoorlockPin"],
 *  "resources":["telia:smartfamily/RealEstate=*\/Building=*\/User=+46701234560/Family=*\/DeviceType=Doorlock/Device=*"],
 *  "conditions":["telia:smartfamily/DayOfWeek=Tue","telia:smartfamily/StartTime=10:00","telia:smartfamily/EndTime=12:00"],
 *  "consId": "30008842-c978-475e-88b1-0560606a4000",
 *  "aud":"a0e3b3dd-3d00-4c59-a4ad-40361ea96931",
 *  "iat":1639038175,
 *  "exp":1639038775,
 *  "iss":"Association Orchestrator"
 * }
 */
export interface SAConsApprovalInitializeSaToSp1JWT extends SAFlowJWTBase {
  iss: "Association Orchestrator";
  aud: string;
  goal: "INITIATE";
  /** Initiate an approval or a rejection */
  type: "CONSENT_APPROVAL" | "CONSENT_REJECTION";
  /** ID of ConsentRequest to approve/reject */
  consReqId: string;

  /** ServiceProvder making this consent */
  consServiceProviderId: string;
  /** Display name of who is making the consent  */
  consPrincipalName: string;
  /** SP2-internal id/ref of the legal entity making the consent */
  consPrincipalId: string;

  /** Actions approved or rejected by user */
  actions: string[];
  /** Resources approved or rejected by user */
  resources: string[];
  /** Conditions approved or rejected by user */
  conditions: string[];

  /** ID of the pending consent created by Association Orchestrator during flow */
  consId: string;
  /** Display name of ServiceProvider making the consent */
  consServiceProviderName: string;
}

export interface ReceivedSAConsInitialization {
  ticket: SAConsApprovalInitializeSaToSp1JWT,
  actionString: ActionString[],
  resourceString: ResourceString[],
  conditionString: ConditionString[],
}

/**
 * Flow token for when SP1 wants to finalize a consent approval against AH
 * SP1 --> AH : Finalize Consent Approval
 * 
 * @example {
 *  "goal":"FINALIZE",
 *  "type":"CONSENT_APPROVAL",
 *  "consReqId": "22908842-c978-475e-88b1-0560606a4364",
 *  "consId": "30008842-c978-475e-88b1-0560606a4000",
 *  "aud":"Association Orchestrator",
 *  "iat":1639038175,
 *  "exp":1639038775,
 *  "iss":"a0e3b3dd-3d00-4c59-a4ad-40361ea96931"
 * }
 */
export interface SAConsApprovalFinalizeSp1ToSaJWT extends SAFlowJWTForSmartAccess {
  iss: string;
  goal: "FINALIZE";
  type: "CONSENT_APPROVAL";

  /** ID of the ConsentRequest */
  consReqId: string;
  /** ID of Consent (Approval) as received from AH */
  consId: string;
}

/**
 * Flow token for when AH passes on the desire to finalize a consent approval towards SP2
 * AH --> SP2 : Finalize Consent Approval
 * 
 * @example {
 *  "goal":"FINALIZE",
 *  "type":"CONSENT_APPROVAL",
 *  "consReqId": "22908842-c978-475e-88b1-0560606a4364",
 *  "consId": "30008842-c978-475e-88b1-0560606a4000",
 *  "aud":"080f264e-99f6-49d3-938c-b8c2d93bf179",
 *  "iat":1639038175,
 *  "exp":1639038775,
 *  "iss":"Association Orchestrator"
 * }
 */
export interface SAConsApprovalFinalizeSaToSp2JWT extends SAFlowJWTBase {
  iss: "Association Orchestrator";
  aud: string;
  goal: "FINALIZE";
  type: "CONSENT_APPROVAL";

  /** ID of the ConsentRequest */
  consReqId: string;
  /** ID of Consent (Approval) that has now been completed */
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
