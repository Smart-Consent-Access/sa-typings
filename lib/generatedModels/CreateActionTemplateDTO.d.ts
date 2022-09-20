import { CreateConditionTemplateDTO } from './CreateConditionTemplateDTO';
import { CreateResourceTemplateDTO } from './CreateResourceTemplateDTO';
export declare class CreateActionTemplateDTO {
    'id'?: string;
    'version'?: number;
    'serviceProviderId': string;
    'name': string;
    'description': string;
    'tenantName': string;
    'systemName': string;
    'resourceTemplates': Array<CreateResourceTemplateDTO>;
    'conditionTemplates': Array<CreateConditionTemplateDTO>;
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
//# sourceMappingURL=CreateActionTemplateDTO.d.ts.map