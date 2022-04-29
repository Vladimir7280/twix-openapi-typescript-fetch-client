/* tslint:disable */
/* eslint-disable */
/*
 * Copyright 2019 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Catapult REST Endpoints
 * OpenAPI Specification of catapult-rest
 *
 * The version of the OpenAPI document: 1.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    NamespaceMetadataTransactionBodyDTO,
    NamespaceMetadataTransactionBodyDTOFromJSON,
    NamespaceMetadataTransactionBodyDTOFromJSONTyped,
    NamespaceMetadataTransactionBodyDTOToJSON,
    NetworkTypeEnum,
    NetworkTypeEnumFromJSON,
    NetworkTypeEnumFromJSONTyped,
    NetworkTypeEnumToJSON,
    TransactionDTO,
    TransactionDTOFromJSON,
    TransactionDTOFromJSONTyped,
    TransactionDTOToJSON,
} from './';

/**
 * Transaction to create or modify a multisig account.
 * @export
 * @interface NamespaceMetadataTransactionDTO
 */
export interface NamespaceMetadataTransactionDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof NamespaceMetadataTransactionDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof NamespaceMetadataTransactionDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof NamespaceMetadataTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof NamespaceMetadataTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof NamespaceMetadataTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof NamespaceMetadataTransactionDTO
     */
    type: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof NamespaceMetadataTransactionDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof NamespaceMetadataTransactionDTO
     */
    deadline: string;
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA. 
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof NamespaceMetadataTransactionDTO
     */
    targetAddress: string;
    /**
     * Metadata key scoped to source, target and type expressed.
     * @type {string}
     * @memberof NamespaceMetadataTransactionDTO
     */
    scopedMetadataKey: string;
    /**
     * Namespace identifier.
     * @type {string}
     * @memberof NamespaceMetadataTransactionDTO
     */
    targetNamespaceId?: string;
    /**
     * Change in value size in bytes.
     * @type {number}
     * @memberof NamespaceMetadataTransactionDTO
     */
    valueSizeDelta: number;
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof NamespaceMetadataTransactionDTO
     */
    valueSize: number;
    /**
     * Metadata value. If embedded in a transaction, this is calculated as xor(previous-value, value).
     * @type {string}
     * @memberof NamespaceMetadataTransactionDTO
     */
    value: string;
}

export function NamespaceMetadataTransactionDTOFromJSON(json: any): NamespaceMetadataTransactionDTO {
    return NamespaceMetadataTransactionDTOFromJSONTyped(json, false);
}

export function NamespaceMetadataTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceMetadataTransactionDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'size': json['size'],
        'signature': json['signature'],
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': json['network'],
        'type': json['type'],
        'maxFee': json['maxFee'],
        'deadline': json['deadline'],
        'targetAddress': json['targetAddress'],
        'scopedMetadataKey': json['scopedMetadataKey'],
        'targetNamespaceId': !exists(json, 'targetNamespaceId') ? undefined : json['targetNamespaceId'],
        'valueSizeDelta': json['valueSizeDelta'],
        'valueSize': json['valueSize'],
        'value': json['value'],
    };
}

export function NamespaceMetadataTransactionDTOToJSON(value?: NamespaceMetadataTransactionDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'size': value.size,
        'signature': value.signature,
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': value.network,
        'type': value.type,
        'maxFee': value.maxFee,
        'deadline': value.deadline,
        'targetAddress': value.targetAddress,
        'scopedMetadataKey': value.scopedMetadataKey,
        'targetNamespaceId': value.targetNamespaceId,
        'valueSizeDelta': value.valueSizeDelta,
        'valueSize': value.valueSize,
        'value': value.value,
    };
}

