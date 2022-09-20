import { ActionStringDTO } from './ActionStringDTO';
import { ConditionStringDTO } from './ConditionStringDTO';
import { ExpressionDTO } from './ExpressionDTO';
export declare class SearchConsentsDTOFields {
    'condition'?: Array<ConditionStringDTO>;
    'resourceTag'?: Array<ExpressionDTO>;
    'action'?: ActionStringDTO;
    'consPrincipalId'?: Array<string>;
    'type'?: string;
    'consentRequestId'?: string;
    'stopCreatedAt'?: string;
    'startCreatedAt'?: string;
    'status'?: string;
    'consServiceProviderId'?: string;
    'reqServiceProviderId'?: string;
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
//# sourceMappingURL=SearchConsentsDTOFields.d.ts.map