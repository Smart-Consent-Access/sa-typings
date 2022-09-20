import { ConsentType } from './ConsentType';
import { PolicySummaryDTO } from './PolicySummaryDTO';
export declare class ConsentSummaryDTO {
    'id': string;
    'type': ConsentType;
    'consPrincipalId': string;
    'consPrincipalName': string;
    'policy'?: Array<PolicySummaryDTO>;
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
//# sourceMappingURL=ConsentSummaryDTO.d.ts.map