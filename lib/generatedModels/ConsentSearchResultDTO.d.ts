import { ConsentType } from './ConsentType';
import { PolicyDTO } from './PolicyDTO';
export declare class ConsentSearchResultDTO {
    'id': string;
    'reqServiceProviderId': string;
    'reqServiceProviderName': string;
    'consPrincipalId': string;
    'consPrincipalName': string;
    'consServiceProviderId': string;
    'consServiceProviderName': string;
    'status': string;
    'type': ConsentType;
    'createdAt': string;
    'updatedAt'?: string;
    'consentRequestId': string;
    'policies': Array<PolicyDTO>;
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
//# sourceMappingURL=ConsentSearchResultDTO.d.ts.map