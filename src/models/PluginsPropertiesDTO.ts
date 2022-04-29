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
    AccountKeyLinkNetworkPropertiesDTO,
    AccountKeyLinkNetworkPropertiesDTOFromJSON,
    AccountKeyLinkNetworkPropertiesDTOFromJSONTyped,
    AccountKeyLinkNetworkPropertiesDTOToJSON,
    AccountRestrictionNetworkPropertiesDTO,
    AccountRestrictionNetworkPropertiesDTOFromJSON,
    AccountRestrictionNetworkPropertiesDTOFromJSONTyped,
    AccountRestrictionNetworkPropertiesDTOToJSON,
    AggregateNetworkPropertiesDTO,
    AggregateNetworkPropertiesDTOFromJSON,
    AggregateNetworkPropertiesDTOFromJSONTyped,
    AggregateNetworkPropertiesDTOToJSON,
    HashLockNetworkPropertiesDTO,
    HashLockNetworkPropertiesDTOFromJSON,
    HashLockNetworkPropertiesDTOFromJSONTyped,
    HashLockNetworkPropertiesDTOToJSON,
    MetadataNetworkPropertiesDTO,
    MetadataNetworkPropertiesDTOFromJSON,
    MetadataNetworkPropertiesDTOFromJSONTyped,
    MetadataNetworkPropertiesDTOToJSON,
    MosaicNetworkPropertiesDTO,
    MosaicNetworkPropertiesDTOFromJSON,
    MosaicNetworkPropertiesDTOFromJSONTyped,
    MosaicNetworkPropertiesDTOToJSON,
    MosaicRestrictionNetworkPropertiesDTO,
    MosaicRestrictionNetworkPropertiesDTOFromJSON,
    MosaicRestrictionNetworkPropertiesDTOFromJSONTyped,
    MosaicRestrictionNetworkPropertiesDTOToJSON,
    MultisigNetworkPropertiesDTO,
    MultisigNetworkPropertiesDTOFromJSON,
    MultisigNetworkPropertiesDTOFromJSONTyped,
    MultisigNetworkPropertiesDTOToJSON,
    NamespaceNetworkPropertiesDTO,
    NamespaceNetworkPropertiesDTOFromJSON,
    NamespaceNetworkPropertiesDTOFromJSONTyped,
    NamespaceNetworkPropertiesDTOToJSON,
    SecretLockNetworkPropertiesDTO,
    SecretLockNetworkPropertiesDTOFromJSON,
    SecretLockNetworkPropertiesDTOFromJSONTyped,
    SecretLockNetworkPropertiesDTOToJSON,
    TransferNetworkPropertiesDTO,
    TransferNetworkPropertiesDTOFromJSON,
    TransferNetworkPropertiesDTOFromJSONTyped,
    TransferNetworkPropertiesDTOToJSON,
} from './';

/**
 * Plugin related configuration properties.
 * @export
 * @interface PluginsPropertiesDTO
 */
export interface PluginsPropertiesDTO {
    /**
     * 
     * @type {AccountKeyLinkNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    accountlink?: AccountKeyLinkNetworkPropertiesDTO;
    /**
     * 
     * @type {AggregateNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    aggregate?: AggregateNetworkPropertiesDTO;
    /**
     * 
     * @type {HashLockNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    lockhash?: HashLockNetworkPropertiesDTO;
    /**
     * 
     * @type {SecretLockNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    locksecret?: SecretLockNetworkPropertiesDTO;
    /**
     * 
     * @type {MetadataNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    metadata?: MetadataNetworkPropertiesDTO;
    /**
     * 
     * @type {MosaicNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    mosaic?: MosaicNetworkPropertiesDTO;
    /**
     * 
     * @type {MultisigNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    multisig?: MultisigNetworkPropertiesDTO;
    /**
     * 
     * @type {NamespaceNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    namespace?: NamespaceNetworkPropertiesDTO;
    /**
     * 
     * @type {AccountRestrictionNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    restrictionaccount?: AccountRestrictionNetworkPropertiesDTO;
    /**
     * 
     * @type {MosaicRestrictionNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    restrictionmosaic?: MosaicRestrictionNetworkPropertiesDTO;
    /**
     * 
     * @type {TransferNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    transfer?: TransferNetworkPropertiesDTO;
}

export function PluginsPropertiesDTOFromJSON(json: any): PluginsPropertiesDTO {
    return PluginsPropertiesDTOFromJSONTyped(json, false);
}

export function PluginsPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PluginsPropertiesDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountlink': !exists(json, 'accountlink') ? undefined : json['accountlink'],
        'aggregate': !exists(json, 'aggregate') ? undefined : json['aggregate'],
        'lockhash': !exists(json, 'lockhash') ? undefined : json['lockhash'],
        'locksecret': !exists(json, 'locksecret') ? undefined : json['locksecret'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'mosaic': !exists(json, 'mosaic') ? undefined : json['mosaic'],
        'multisig': !exists(json, 'multisig') ? undefined : json['multisig'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'restrictionaccount': !exists(json, 'restrictionaccount') ? undefined : json['restrictionaccount'],
        'restrictionmosaic': !exists(json, 'restrictionmosaic') ? undefined : json['restrictionmosaic'],
        'transfer': !exists(json, 'transfer') ? undefined : json['transfer'],
    };
}

export function PluginsPropertiesDTOToJSON(value?: PluginsPropertiesDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountlink': value.accountlink,
        'aggregate': value.aggregate,
        'lockhash': value.lockhash,
        'locksecret': value.locksecret,
        'metadata': value.metadata,
        'mosaic': value.mosaic,
        'multisig': value.multisig,
        'namespace': value.namespace,
        'restrictionaccount': value.restrictionaccount,
        'restrictionmosaic': value.restrictionmosaic,
        'transfer': value.transfer,
    };
}

