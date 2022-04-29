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
    AddressAliasTransactionBodyDTO,
    AddressAliasTransactionBodyDTOFromJSON,
    AddressAliasTransactionBodyDTOFromJSONTyped,
    AddressAliasTransactionBodyDTOToJSON,
    AliasActionEnum,
    AliasActionEnumFromJSON,
    AliasActionEnumFromJSONTyped,
    AliasActionEnumToJSON,
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
 * Transaction to link a namespace to an account.
 * @export
 * @interface AddressAliasTransactionDTO
 */
export interface AddressAliasTransactionDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof AddressAliasTransactionDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof AddressAliasTransactionDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof AddressAliasTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof AddressAliasTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof AddressAliasTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof AddressAliasTransactionDTO
     */
    type: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof AddressAliasTransactionDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof AddressAliasTransactionDTO
     */
    deadline: string;
    /**
     * Namespace identifier.
     * @type {string}
     * @memberof AddressAliasTransactionDTO
     */
    namespaceId: string;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof AddressAliasTransactionDTO
     */
    address: string;
    /**
     * 
     * @type {AliasActionEnum}
     * @memberof AddressAliasTransactionDTO
     */
    aliasAction: AliasActionEnum;
}

export function AddressAliasTransactionDTOFromJSON(json: any): AddressAliasTransactionDTO {
    return AddressAliasTransactionDTOFromJSONTyped(json, false);
}

export function AddressAliasTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressAliasTransactionDTO {
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
        'namespaceId': json['namespaceId'],
        'address': json['address'],
        'aliasAction': json['aliasAction'],
    };
}

export function AddressAliasTransactionDTOToJSON(value?: AddressAliasTransactionDTO | null): any {
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
        'namespaceId': value.namespaceId,
        'address': value.address,
        'aliasAction': value.aliasAction,
    };
}

