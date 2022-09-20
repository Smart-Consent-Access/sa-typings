import { DebugDTOExampleKeyPair } from './DebugDTOExampleKeyPair';
export declare class DebugDTO {
    'exampleKeyPair': DebugDTOExampleKeyPair;
    'authTicket': string;
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
//# sourceMappingURL=DebugDTO.d.ts.map