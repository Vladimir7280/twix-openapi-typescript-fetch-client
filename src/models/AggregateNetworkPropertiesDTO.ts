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
/**
 * 
 * @export
 * @interface AggregateNetworkPropertiesDTO
 */
export interface AggregateNetworkPropertiesDTO {
    /**
     * Maximum number of transactions per aggregate.
     * @type {string}
     * @memberof AggregateNetworkPropertiesDTO
     */
    maxTransactionsPerAggregate?: string;
    /**
     * Maximum number of cosignatures per aggregate.
     * @type {string}
     * @memberof AggregateNetworkPropertiesDTO
     */
    maxCosignaturesPerAggregate?: string;
    /**
     * Set to true if cosignatures must exactly match component signers. Set to false if cosignatures should be validated externally.
     * @type {boolean}
     * @memberof AggregateNetworkPropertiesDTO
     */
    enableStrictCosignatureCheck?: boolean;
    /**
     * Set to true if bonded aggregates should be allowed. Set to false if bonded aggregates should be rejected.
     * @type {boolean}
     * @memberof AggregateNetworkPropertiesDTO
     */
    enableBondedAggregateSupport?: boolean;
    /**
     * Maximum lifetime a bonded transaction can have before it expires.
     * @type {string}
     * @memberof AggregateNetworkPropertiesDTO
     */
    maxBondedTransactionLifetime?: string;
}

export function AggregateNetworkPropertiesDTOFromJSON(json: any): AggregateNetworkPropertiesDTO {
    return AggregateNetworkPropertiesDTOFromJSONTyped(json, false);
}

export function AggregateNetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AggregateNetworkPropertiesDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'maxTransactionsPerAggregate': !exists(json, 'maxTransactionsPerAggregate') ? undefined : json['maxTransactionsPerAggregate'],
        'maxCosignaturesPerAggregate': !exists(json, 'maxCosignaturesPerAggregate') ? undefined : json['maxCosignaturesPerAggregate'],
        'enableStrictCosignatureCheck': !exists(json, 'enableStrictCosignatureCheck') ? undefined : json['enableStrictCosignatureCheck'],
        'enableBondedAggregateSupport': !exists(json, 'enableBondedAggregateSupport') ? undefined : json['enableBondedAggregateSupport'],
        'maxBondedTransactionLifetime': !exists(json, 'maxBondedTransactionLifetime') ? undefined : json['maxBondedTransactionLifetime'],
    };
}

export function AggregateNetworkPropertiesDTOToJSON(value?: AggregateNetworkPropertiesDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'maxTransactionsPerAggregate': value.maxTransactionsPerAggregate,
        'maxCosignaturesPerAggregate': value.maxCosignaturesPerAggregate,
        'enableStrictCosignatureCheck': value.enableStrictCosignatureCheck,
        'enableBondedAggregateSupport': value.enableBondedAggregateSupport,
        'maxBondedTransactionLifetime': value.maxBondedTransactionLifetime,
    };
}

