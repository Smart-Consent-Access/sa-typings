export declare class ConditionTemplateDTO {
    'id': string;
    'policyActionTemplateId': string;
    'name': string;
    'tenantName': string;
    'systemName': string;
    'validationType': string;
    'validationParams': string;
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
//# sourceMappingURL=ConditionTemplateDTO.d.ts.map