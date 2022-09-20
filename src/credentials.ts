import { JWK } from "jose";

export interface SymmetricKeys {
  iv: number;
  keyString: string;
}

export interface CredentialDTO {
  issuer: string;
  encryptedVC: string;
  encryptedKeys: SymmetricKeys;
  serviceProviderId?: string;
}

export interface AssertionMethodDTO {
  id: string;
  type: string;
  controller: string;
  publicKeyJwk: JWK;
}

export interface DIDDocumentDTO {
  "@context": string[];
  id: string; //TODO Special format fix later
  controller: string;
  assertionMethod: AssertionMethodDTO[];
}

export interface PostLpDTO {
  didDoc: DIDDocumentDTO;
  spId: string;
}

export interface PresentationDTO {
  issuer: string;
  encryptedVP: string;
  encryptedKeys: SymmetricKeys;
}