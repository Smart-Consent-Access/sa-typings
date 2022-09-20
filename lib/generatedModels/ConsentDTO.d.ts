import { ConsentType } from './ConsentType';
import { LegalEntityDTO } from './LegalEntityDTO';
import { PolicyDTO } from './PolicyDTO';
export declare class ConsentDTO {
    'id': string;
    'consentRequestId': string;
    'type': ConsentType;
    'legalEntity'?: LegalEntityDTO;
    'policy'?: Array<PolicyDTO>;
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
//# sourceMappingURL=ConsentDTO.d.ts.map