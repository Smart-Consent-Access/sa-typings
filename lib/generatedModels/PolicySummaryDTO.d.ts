export declare class PolicySummaryDTO {
    'reqServiceProviderId': string;
    'reqPrincipalId': string;
    'consServiceProviderId': string;
    'consPrincipalId': string;
    'actions': Array<string>;
    'resources': Array<string>;
    'conditions': Array<string>;
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
//# sourceMappingURL=PolicySummaryDTO.d.ts.map