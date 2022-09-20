export declare class ValidationErrorDTO {
    'statusCode': number;
    'message': string;
    'details'?: any;
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
//# sourceMappingURL=ValidationErrorDTO.d.ts.map