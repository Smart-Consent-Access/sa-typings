export declare class SearchConsentsDTOSort {
    'status'?: SearchConsentsDTOSortStatusEnum;
    'updatedAt'?: SearchConsentsDTOSortUpdatedAtEnum;
    'createdAt'?: SearchConsentsDTOSortCreatedAtEnum;
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
export declare type SearchConsentsDTOSortStatusEnum = "asc" | "desc";
export declare type SearchConsentsDTOSortUpdatedAtEnum = "asc" | "desc";
export declare type SearchConsentsDTOSortCreatedAtEnum = "asc" | "desc";
//# sourceMappingURL=SearchConsentsDTOSort.d.ts.map