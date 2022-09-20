import { ExpressionDTO } from './ExpressionDTO';
export declare class ConditionStringDTO {
    'tenant': string;
    'system': string;
    'expression': ExpressionDTO;
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
//# sourceMappingURL=ConditionStringDTO.d.ts.map