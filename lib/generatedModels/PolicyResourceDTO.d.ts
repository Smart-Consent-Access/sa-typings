import { ResourceTagDTO } from './ResourceTagDTO';
export declare class PolicyResourceDTO {
    'tenant': string;
    'system': string;
    'tags': Array<ResourceTagDTO>;
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
//# sourceMappingURL=PolicyResourceDTO.d.ts.map