import { ResourceTagTemplateDTO } from './ResourceTagTemplateDTO';
export declare class ResourceTemplateDTO {
    'id': string;
    'policyActionTemplateId': string;
    'tenantName': string;
    'systemName': string;
    'resourceTagTemplates': Array<ResourceTagTemplateDTO>;
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
//# sourceMappingURL=ResourceTemplateDTO.d.ts.map