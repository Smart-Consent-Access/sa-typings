import { ActionStringDTO } from './ActionStringDTO';
import { ConditionStringDTO } from './ConditionStringDTO';
import { ExpressionDTO } from './ExpressionDTO';
export declare class SearchConsentRequestsDTOFields {
    'condition'?: Array<ConditionStringDTO>;
    'resourceTag'?: Array<ExpressionDTO>;
    'action'?: ActionStringDTO;
    'reqPrincipalId'?: Array<string>;
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
//# sourceMappingURL=SearchConsentRequestsDTOFields.d.ts.map