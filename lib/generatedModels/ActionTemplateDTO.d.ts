import { ConditionTemplateDTO } from './ConditionTemplateDTO';
import { ResourceTemplateDTO } from './ResourceTemplateDTO';
export declare class ActionTemplateDTO {
    'id': string;
    'serviceProviderId': string;
    'name': string;
    'description': string;
    'version': number;
    'tenantName': string;
    'systemName': string;
    'status': string;
    'resourceTemplates': Array<ResourceTemplateDTO>;
    'conditionTemplates': Array<ConditionTemplateDTO>;
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
//# sourceMappingURL=ActionTemplateDTO.d.ts.map