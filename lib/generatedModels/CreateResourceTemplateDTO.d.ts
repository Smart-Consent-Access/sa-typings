import { CreateResourceTagTemplateDTO } from './CreateResourceTagTemplateDTO';
export declare class CreateResourceTemplateDTO {
    'id'?: string;
    'policyActionTemplateId'?: string;
    'tenantName': string;
    'systemName': string;
    'resourceTagTemplates': Array<CreateResourceTagTemplateDTO>;
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
//# sourceMappingURL=CreateResourceTemplateDTO.d.ts.map