export declare class SingleProviderConsentDTO {
    'reqPrincipalName': string;
    'reqPrincipalId': string;
    'consPrincipalName': string;
    'consPrincipalId': string;
    'actions': Array<string>;
    'resources': Array<string>;
    'conditions': Array<string>;
    'termsAndConditions'?: string;
    'consentedAt'?: number;
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
//# sourceMappingURL=SingleProviderConsentDTO.d.ts.map