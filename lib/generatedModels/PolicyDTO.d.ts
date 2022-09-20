import { PolicyActionDTO } from './PolicyActionDTO';
import { PolicyConditionDTO } from './PolicyConditionDTO';
import { PolicyResourceDTO } from './PolicyResourceDTO';
export declare class PolicyDTO {
    'actions': Array<PolicyActionDTO>;
    'conditions': Array<PolicyConditionDTO>;
    'resources': Array<PolicyResourceDTO>;
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
//# sourceMappingURL=PolicyDTO.d.ts.map