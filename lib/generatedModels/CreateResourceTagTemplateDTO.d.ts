export declare class CreateResourceTagTemplateDTO {
    'id'?: string;
    'policyResourceTemplateId'?: string;
    'name': string;
    'validationType': string;
    'validationParams': string;
    'ordno': number;
    'pii': boolean;
    'e2eEncrypted': boolean;
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
//# sourceMappingURL=CreateResourceTagTemplateDTO.d.ts.map