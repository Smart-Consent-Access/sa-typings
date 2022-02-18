
export type ScopeType = "serviceprovider:info" | "serviceprovider:flow" | "serviceprovider:ticket"

export type KindType = "API_AUTHORIZATION" | "FLOW" | "AUTH_TICKET"

export interface SAJsonWebToken {
  /** Audience ("Association Hub" or ServiceProvider.Id) */
  aud: "Association Orchestrator" | string;

  /** Isued by ("Association Hub" or ServiceProvider.Id) */
  iss: "Association Orchestrator" | string;

  /** Issued at timestamp */
  iat: number;

  /** Expires at timestamp */
  exp: number;

  kind: KindType;

  scope: ScopeType[];
}

export interface SAAuthJwt extends SAJsonWebToken {
  kind: "API_AUTHORIZATION";
}