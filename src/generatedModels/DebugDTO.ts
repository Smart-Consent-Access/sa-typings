/**
 * @ao/ah-api
 * Telia Smart Access API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DebugDTOExampleKeyPair } from './DebugDTOExampleKeyPair';
import { HttpFile } from '../http/http';

export class DebugDTO {
    'exampleKeyPair': DebugDTOExampleKeyPair;
    'authTicket': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "exampleKeyPair",
            "baseName": "exampleKeyPair",
            "type": "DebugDTOExampleKeyPair",
            "format": ""
        },
        {
            "name": "authTicket",
            "baseName": "authTicket",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DebugDTO.attributeTypeMap;
    }
    
    public constructor() {
    }
}

