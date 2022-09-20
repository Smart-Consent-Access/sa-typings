import { ConsentRequestSearchResultDTOConsents } from './ConsentRequestSearchResultDTOConsents';
import { LocalizedStringDTO } from './LocalizedStringDTO';
export declare class ConsentRequestSearchResultDTO {
    'id': string;
    'actions': Array<string>;
    'resources': Array<string>;
    'conditions': Array<string>;
    'termsAndConditions': string;
    'purpose': Array<LocalizedStringDTO>;
    'reqServiceProviderId': string;
    'reqServiceProviderName': string;
    'reqPrincipalId': string;
    'reqPrincipalName': string;
    'consServiceProviderId': string;
    'consServiceProviderName': string;
    'numApproved': number;
    'numRejected': number;
    'responseTotalStatus': ConsentRequestSearchResultDTOResponseTotalStatusEnum;
    'numAffectedUsers': number;
    'status': string;
    'createdAt': string;
    'updatedAt'?: string;
    'consents': Array<ConsentRequestSearchResultDTOConsents>;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export declare type ConsentRequestSearchResultDTOResponseTotalStatusEnum = "PENDING" | "COMPLETED";
//# sourceMappingURL=ConsentRequestSearchResultDTO.d.ts.map