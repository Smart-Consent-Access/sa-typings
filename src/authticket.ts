
import { SAJsonWebToken, ScopeType } from "./jwt";

export interface SAAuthTicket extends SAJsonWebToken {
  iss: "Association Orchestrator";
  kind: "AUTH_TICKET";
  scope: ScopeType[];

  reqServiceProviderId: string;
  reqPrincipalId: string;

  consServiceProviderId: string;
  consPrincipalId: string;

  actions: string[];
  resources: string[];
  conditions: string[];
}
