import { ConsentSummaryDTO } from './ConsentSummaryDTO';
import { LocalizedStringDTO } from './LocalizedStringDTO';
export declare class ConsentRequestSummaryDTO {
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
    'consents'?: Array<ConsentSummaryDTO>;
    'numApproved': number;
    'numRejected': number;
    'responseTotalStatus': ConsentRequestSummaryDTOResponseTotalStatusEnum;
    'numAffectedUsers': number;
    'createdAt': Date;
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
export declare type ConsentRequestSummaryDTOResponseTotalStatusEnum = "PENDING" | "COMPLETED";
//# sourceMappingURL=ConsentRequestSummaryDTO.d.ts.map