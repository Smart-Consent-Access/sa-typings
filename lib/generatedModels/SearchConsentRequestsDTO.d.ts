import { SearchConsentRequestsDTOFields } from './SearchConsentRequestsDTOFields';
import { SearchConsentsDTOSort } from './SearchConsentsDTOSort';
export declare class SearchConsentRequestsDTO {
    'skip'?: number;
    'take'?: number;
    'searchQuery'?: string;
    'fields': SearchConsentRequestsDTOFields;
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
//# sourceMappingURL=SearchConsentRequestsDTO.d.ts.map