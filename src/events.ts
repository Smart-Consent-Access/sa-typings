export const SAEventTopic = "ao-api-event";
export const SAEventKey = "ao-event-key";
export const SAAdminEventTopic = "ao-admin-api-event";

export interface SAEvent {
  id: string;
  eventTime: number;
  request: {
    requestId: string;
    authServiceprovider: {
      id: string;
      name: string;
    };
    requesterIp: string;
    endpoint: string;
  };
  typeInfo: EventTypeInfo;
}

export interface EventTypeInfo {
  type: EventType;
  level: EventLevel;
  extraPayload: any;
}

export interface RequestTypeInfo extends EventTypeInfo {
  type: EventType.REQUEST_SUCCESS | EventType.REQUEST_FAIL;
  level: EventLevel.INFO;
  extraPayload: {
    statusCode: number;
    message: string;
  };
}

export interface AuthenticationFailTypeInfo extends EventTypeInfo {
  type: EventType.AUTHENTICATION_FAIL | EventType.AUTHENTICATION_FLOW_FAIL;
  level: EventLevel.ALERT;
  extraPayload: {
    inToken: any;
    tokenIssuer: string;
    requiredScopes: string[];
    requestScopes: string[];
    message: string;
  };
}

export interface FetchAccessFailTypeInfo extends EventTypeInfo {
  type:
    | EventType.AUTH_TICKET_ACCESS_FAIL
    | EventType.FETCH_CR_ACCESS_FAIL
    | EventType.FETCH_CONSENT_ACCESS_FAIL;
  level: EventLevel.ALERT;
  extraPayload: {
    entityId: string;
    message: string;
  };
}

export interface FlowAccessFailTypeInfo extends EventTypeInfo {
  type:
    | EventType.INITIALIZE_CR_ACCESS_FAIL
    | EventType.FINALIZE_CR_ACCESS_FAIL
    | EventType.INITIALIZE_CONSENT_ACCESS_FAIL
    | EventType.FINALIZE_CONSENT_ACCESS_FAIL;
  level: EventLevel.ALERT;
  extraPayload: {
    inToken: any;
    message: string;
  };
}

interface spInfo {
  id: string;
  name: string;
}

export interface DeleteSuccessTypeInfo extends EventTypeInfo {
  type: EventType.DELETE_CR_SUCCESS | EventType.DELETE_CONSENT_SUCCESS;
  level: EventLevel.INFO;
  extraPayload: {
    entity: {
      id: string;
      status: string;
    };
    consSp: spInfo;
    reqSp: spInfo;
  };
}

export interface FlowSuccessTypeInfo extends EventTypeInfo {
  type:
    | EventType.INITIALIZE_CR_SUCCESS
    | EventType.FINALIZE_CR_SUCCESS
    | EventType.INITIALIZE_CONSENT_SUCCESS
    | EventType.FINALIZE_CONSENT_SUCCESS;
  level: EventLevel.INFO;
  extraPayload: {
    entity: {
      id: string;
      status: string;
    };
    consSp: spInfo;
    reqSp: spInfo;
    verifiedInToken: any;
  };
}

export interface AuthTicketSuccessTypeInfo extends EventTypeInfo {
  type: EventType.AUTH_TICKET_SUCCESS;
  level: EventLevel.INFO;
  extraPayload: {
    consentId: string;
    consSp: spInfo;
    reqSp: spInfo;
  };
}

export interface ServiceProviderSuccessTypeInfo extends EventTypeInfo {
  type:
    | EventType.REGISTER_SERVICEPROVIDER_SUCCESS
    | EventType.DELETE_SERVICEPROVIDER_SUCCESS
    | EventType.UPDATE_SERVICEPROVIDER_SUCCESS;
  level: EventLevel.INFO;
  extraPayload: {
    serviceprovider: {
      id: string;
      name: string;
      status: string;
    };
  };
}

export enum EventType {
  REQUEST_SUCCESS = "request_success",
  REQUEST_FAIL = "request_fail",
  AUTHENTICATION_FAIL = "authentication_fail",
  AUTHENTICATION_FLOW_FAIL = "authentication_flow_fail",
  INITIALIZE_CR_SUCCESS = "initialize_consent_request_success",
  INITIALIZE_CR_ACCESS_FAIL = "initialize_consent_request_access_fail",
  FINALIZE_CR_SUCCESS = "finalize_consent_request_success",
  FINALIZE_CR_ACCESS_FAIL = "finalize_consent_request_access_fail",
  INITIALIZE_CONSENT_SUCCESS = "initialize_consent_success",
  INITIALIZE_CONSENT_ACCESS_FAIL = "initialize_consent_access_fail",
  FINALIZE_CONSENT_SUCCESS = "finalize_consent_success",
  FINALIZE_CONSENT_ACCESS_FAIL = "finalize_consent_access_fail",
  AUTH_TICKET_SUCCESS = "create_authorization_ticket_success",
  AUTH_TICKET_ACCESS_FAIL = "create_authorization_ticket_access_fail",
  FETCH_CR_ACCESS_FAIL = "fetch_consent_request_access_fail",
  FETCH_CONSENT_ACCESS_FAIL = "fetch_consent_access_fail",
  DELETE_CR_SUCCESS = "delete_consent_request_success",
  DELETE_CONSENT_SUCCESS = "delete_consent_success",
  REGISTER_SERVICEPROVIDER_SUCCESS = "register_serviceprovider_success",
  DELETE_SERVICEPROVIDER_SUCCESS = "delete_serviceprovider_success",
  UPDATE_SERVICEPROVIDER_SUCCESS = "update_serviceprovider_success",
}

export enum EventLevel {
  INFO = "info",
  ALERT = "alert",
}
