import { ConsentRequestSearchResultDTO } from './ConsentRequestSearchResultDTO';
export declare class PaginationResultDTOConsentRequestSearchResultDTO {
    'list': Array<ConsentRequestSearchResultDTO>;
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
//# sourceMappingURL=PaginationResultDTOConsentRequestSearchResultDTO.d.ts.map