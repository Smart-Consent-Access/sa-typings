export declare class ServiceProviderDTO {
    'id': string;
    'name': string;
    'iconUrl': string;
    'publicKey': string;
    'initiateConsentRequestUrl': string;
    'finalizeConsentRequestUrl': string;
    'initiateConsentUrl': string;
    'finalizeConsentUrl': string;
    'allowUndefinedActions': boolean;
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
//# sourceMappingURL=ServiceProviderDTO.d.ts.map