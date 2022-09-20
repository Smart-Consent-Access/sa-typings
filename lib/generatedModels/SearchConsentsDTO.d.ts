import { SearchConsentsDTOFields } from './SearchConsentsDTOFields';
import { SearchConsentsDTOSort } from './SearchConsentsDTOSort';
export declare class SearchConsentsDTO {
    'skip'?: number;
    'take'?: number;
    'searchQuery'?: string;
    'fields': SearchConsentsDTOFields;
    'sort'?: SearchConsentsDTOSort;
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
//# sourceMappingURL=SearchConsentsDTO.d.ts.map