import { ConsentSearchResultDTO } from './ConsentSearchResultDTO';
export declare class PaginationResultDTOConsentSearchResultDTO {
    'list': Array<ConsentSearchResultDTO>;
    'totalCount': number;
    'taken': number;
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
//# sourceMappingURL=PaginationResultDTOConsentSearchResultDTO.d.ts.map