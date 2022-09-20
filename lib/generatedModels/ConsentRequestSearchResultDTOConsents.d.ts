import { ConsentType } from './ConsentType';
export declare class ConsentRequestSearchResultDTOConsents {
    'type': ConsentType;
    'id': string;
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
//# sourceMappingURL=ConsentRequestSearchResultDTOConsents.d.ts.map