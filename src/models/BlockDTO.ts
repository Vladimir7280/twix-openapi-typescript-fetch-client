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
    BlockDTOAllOf,
    BlockDTOAllOfFromJSON,
    BlockDTOAllOfFromJSONTyped,
    BlockDTOAllOfToJSON,
    EntityDTO,
    EntityDTOFromJSON,
    EntityDTOFromJSONTyped,
    EntityDTOToJSON,
    NetworkTypeEnum,
    NetworkTypeEnumFromJSON,
    NetworkTypeEnumFromJSONTyped,
    NetworkTypeEnumToJSON,
    SizePrefixedEntityDTO,
    SizePrefixedEntityDTOFromJSON,
    SizePrefixedEntityDTOFromJSONTyped,
    SizePrefixedEntityDTOToJSON,
    VerifiableEntityDTO,
    VerifiableEntityDTOFromJSON,
    VerifiableEntityDTOFromJSONTyped,
    VerifiableEntityDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface BlockDTO
 */
export interface BlockDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof BlockDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof BlockDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof BlockDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof BlockDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof BlockDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof BlockDTO
     */
    type: number;
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof BlockDTO
     */
    height: string;
    /**
     * Number of milliseconds elapsed since the creation of the nemesis block. This value can be converted to epoch time by adding the network's 'epochAdjustment'.
     * @type {string}
     * @memberof BlockDTO
     */
    timestamp: string;
    /**
     * Determines how hard is to harvest a new block, based on previous blocks.
     * @type {string}
     * @memberof BlockDTO
     */
    difficulty: string;
    /**
     * 32-bytes VRF proof gamma.
     * @type {string}
     * @memberof BlockDTO
     */
    proofGamma: string;
    /**
     * 16-bytes VRF proof verification hash.
     * @type {string}
     * @memberof BlockDTO
     */
    proofVerificationHash: string;
    /**
     * 32-bytes VRF proof scalar.
     * @type {string}
     * @memberof BlockDTO
     */
    proofScalar: string;
    /**
     * 
     * @type {string}
     * @memberof BlockDTO
     */
    previousBlockHash: string;
    /**
     * 
     * @type {string}
     * @memberof BlockDTO
     */
    transactionsHash: string;
    /**
     * 
     * @type {string}
     * @memberof BlockDTO
     */
    receiptsHash: string;
    /**
     * 
     * @type {string}
     * @memberof BlockDTO
     */
    stateHash: string;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof BlockDTO
     */
    beneficiaryAddress: string;
    /**
     * Fee multiplier applied to transactions contained in block.
     * @type {number}
     * @memberof BlockDTO
     */
    feeMultiplier: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof BlockDTO
     */
    collectedEpochFees: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof BlockDTO
     */
    feeToPay: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof BlockDTO
     */
    totalSupply: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof BlockDTO
     */
    inflation: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof BlockDTO
     */
    inflationMultiplier: string;
}

export function BlockDTOFromJSON(json: any): BlockDTO {
    return BlockDTOFromJSONTyped(json, false);
}

export function BlockDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockDTO {
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
        'height': json['height'],
        'timestamp': json['timestamp'],
        'difficulty': json['difficulty'],
        'proofGamma': json['proofGamma'],
        'proofVerificationHash': json['proofVerificationHash'],
        'proofScalar': json['proofScalar'],
        'previousBlockHash': json['previousBlockHash'],
        'transactionsHash': json['transactionsHash'],
        'receiptsHash': json['receiptsHash'],
        'stateHash': json['stateHash'],
        'beneficiaryAddress': json['beneficiaryAddress'],
        'feeMultiplier': json['feeMultiplier'],
        'collectedEpochFees': json['collectedEpochFees'],
        'feeToPay': json['feeToPay'],
        'totalSupply': json['totalSupply'],
        'inflation': json['inflation'],
        'inflationMultiplier': json['inflationMultiplier'],
    };
}

export function BlockDTOToJSON(value?: BlockDTO | null): any {
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
        'height': value.height,
        'timestamp': value.timestamp,
        'difficulty': value.difficulty,
        'proofGamma': value.proofGamma,
        'proofVerificationHash': value.proofVerificationHash,
        'proofScalar': value.proofScalar,
        'previousBlockHash': value.previousBlockHash,
        'transactionsHash': value.transactionsHash,
        'receiptsHash': value.receiptsHash,
        'stateHash': value.stateHash,
        'beneficiaryAddress': value.beneficiaryAddress,
        'feeMultiplier': value.feeMultiplier,
        'collectedEpochFees': value.collectedEpochFees,
        'feeToPay': value.feeToPay,
        'totalSupply': value.totalSupply,
        'inflation': value.inflation,
        'inflationMultiplier': value.inflationMultiplier,
    };
}


