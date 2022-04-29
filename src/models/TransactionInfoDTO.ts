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
    AccountAddressRestrictionTransactionDTO,
    AccountAddressRestrictionTransactionDTOFromJSON,
    AccountAddressRestrictionTransactionDTOFromJSONTyped,
    AccountAddressRestrictionTransactionDTOToJSON,
    AccountKeyLinkTransactionDTO,
    AccountKeyLinkTransactionDTOFromJSON,
    AccountKeyLinkTransactionDTOFromJSONTyped,
    AccountKeyLinkTransactionDTOToJSON,
    AccountMetadataTransactionDTO,
    AccountMetadataTransactionDTOFromJSON,
    AccountMetadataTransactionDTOFromJSONTyped,
    AccountMetadataTransactionDTOToJSON,
    AccountMosaicRestrictionTransactionDTO,
    AccountMosaicRestrictionTransactionDTOFromJSON,
    AccountMosaicRestrictionTransactionDTOFromJSONTyped,
    AccountMosaicRestrictionTransactionDTOToJSON,
    AccountOperationRestrictionTransactionDTO,
    AccountOperationRestrictionTransactionDTOFromJSON,
    AccountOperationRestrictionTransactionDTOFromJSONTyped,
    AccountOperationRestrictionTransactionDTOToJSON,
    AddressAliasTransactionDTO,
    AddressAliasTransactionDTOFromJSON,
    AddressAliasTransactionDTOFromJSONTyped,
    AddressAliasTransactionDTOToJSON,
    AggregateTransactionDTO,
    AggregateTransactionDTOFromJSON,
    AggregateTransactionDTOFromJSONTyped,
    AggregateTransactionDTOToJSON,
    AggregateTransactionExtendedDTO,
    AggregateTransactionExtendedDTOFromJSON,
    AggregateTransactionExtendedDTOFromJSONTyped,
    AggregateTransactionExtendedDTOToJSON,
    EmbeddedAccountAddressRestrictionTransactionDTO,
    EmbeddedAccountAddressRestrictionTransactionDTOFromJSON,
    EmbeddedAccountAddressRestrictionTransactionDTOFromJSONTyped,
    EmbeddedAccountAddressRestrictionTransactionDTOToJSON,
    EmbeddedAccountKeyLinkTransactionDTO,
    EmbeddedAccountKeyLinkTransactionDTOFromJSON,
    EmbeddedAccountKeyLinkTransactionDTOFromJSONTyped,
    EmbeddedAccountKeyLinkTransactionDTOToJSON,
    EmbeddedAccountMetadataTransactionDTO,
    EmbeddedAccountMetadataTransactionDTOFromJSON,
    EmbeddedAccountMetadataTransactionDTOFromJSONTyped,
    EmbeddedAccountMetadataTransactionDTOToJSON,
    EmbeddedAccountMosaicRestrictionTransactionDTO,
    EmbeddedAccountMosaicRestrictionTransactionDTOFromJSON,
    EmbeddedAccountMosaicRestrictionTransactionDTOFromJSONTyped,
    EmbeddedAccountMosaicRestrictionTransactionDTOToJSON,
    EmbeddedAccountOperationRestrictionTransactionDTO,
    EmbeddedAccountOperationRestrictionTransactionDTOFromJSON,
    EmbeddedAccountOperationRestrictionTransactionDTOFromJSONTyped,
    EmbeddedAccountOperationRestrictionTransactionDTOToJSON,
    EmbeddedAddressAliasTransactionDTO,
    EmbeddedAddressAliasTransactionDTOFromJSON,
    EmbeddedAddressAliasTransactionDTOFromJSONTyped,
    EmbeddedAddressAliasTransactionDTOToJSON,
    EmbeddedHashLockTransactionDTO,
    EmbeddedHashLockTransactionDTOFromJSON,
    EmbeddedHashLockTransactionDTOFromJSONTyped,
    EmbeddedHashLockTransactionDTOToJSON,
    EmbeddedMosaicAddressRestrictionTransactionDTO,
    EmbeddedMosaicAddressRestrictionTransactionDTOFromJSON,
    EmbeddedMosaicAddressRestrictionTransactionDTOFromJSONTyped,
    EmbeddedMosaicAddressRestrictionTransactionDTOToJSON,
    EmbeddedMosaicAliasTransactionDTO,
    EmbeddedMosaicAliasTransactionDTOFromJSON,
    EmbeddedMosaicAliasTransactionDTOFromJSONTyped,
    EmbeddedMosaicAliasTransactionDTOToJSON,
    EmbeddedMosaicDefinitionTransactionDTO,
    EmbeddedMosaicDefinitionTransactionDTOFromJSON,
    EmbeddedMosaicDefinitionTransactionDTOFromJSONTyped,
    EmbeddedMosaicDefinitionTransactionDTOToJSON,
    EmbeddedMosaicGlobalRestrictionTransactionDTO,
    EmbeddedMosaicGlobalRestrictionTransactionDTOFromJSON,
    EmbeddedMosaicGlobalRestrictionTransactionDTOFromJSONTyped,
    EmbeddedMosaicGlobalRestrictionTransactionDTOToJSON,
    EmbeddedMosaicMetadataTransactionDTO,
    EmbeddedMosaicMetadataTransactionDTOFromJSON,
    EmbeddedMosaicMetadataTransactionDTOFromJSONTyped,
    EmbeddedMosaicMetadataTransactionDTOToJSON,
    EmbeddedMosaicSupplyChangeTransactionDTO,
    EmbeddedMosaicSupplyChangeTransactionDTOFromJSON,
    EmbeddedMosaicSupplyChangeTransactionDTOFromJSONTyped,
    EmbeddedMosaicSupplyChangeTransactionDTOToJSON,
    EmbeddedMultisigAccountModificationTransactionDTO,
    EmbeddedMultisigAccountModificationTransactionDTOFromJSON,
    EmbeddedMultisigAccountModificationTransactionDTOFromJSONTyped,
    EmbeddedMultisigAccountModificationTransactionDTOToJSON,
    EmbeddedNamespaceMetadataTransactionDTO,
    EmbeddedNamespaceMetadataTransactionDTOFromJSON,
    EmbeddedNamespaceMetadataTransactionDTOFromJSONTyped,
    EmbeddedNamespaceMetadataTransactionDTOToJSON,
    EmbeddedNamespaceRegistrationTransactionDTO,
    EmbeddedNamespaceRegistrationTransactionDTOFromJSON,
    EmbeddedNamespaceRegistrationTransactionDTOFromJSONTyped,
    EmbeddedNamespaceRegistrationTransactionDTOToJSON,
    EmbeddedNodeKeyLinkTransactionDTO,
    EmbeddedNodeKeyLinkTransactionDTOFromJSON,
    EmbeddedNodeKeyLinkTransactionDTOFromJSONTyped,
    EmbeddedNodeKeyLinkTransactionDTOToJSON,
    EmbeddedSecretLockTransactionDTO,
    EmbeddedSecretLockTransactionDTOFromJSON,
    EmbeddedSecretLockTransactionDTOFromJSONTyped,
    EmbeddedSecretLockTransactionDTOToJSON,
    EmbeddedSecretProofTransactionDTO,
    EmbeddedSecretProofTransactionDTOFromJSON,
    EmbeddedSecretProofTransactionDTOFromJSONTyped,
    EmbeddedSecretProofTransactionDTOToJSON,
    EmbeddedTransactionMetaDTO,
    EmbeddedTransactionMetaDTOFromJSON,
    EmbeddedTransactionMetaDTOFromJSONTyped,
    EmbeddedTransactionMetaDTOToJSON,
    EmbeddedTransferTransactionDTO,
    EmbeddedTransferTransactionDTOFromJSON,
    EmbeddedTransferTransactionDTOFromJSONTyped,
    EmbeddedTransferTransactionDTOToJSON,
    EmbeddedVotingKeyLinkTransactionDTO,
    EmbeddedVotingKeyLinkTransactionDTOFromJSON,
    EmbeddedVotingKeyLinkTransactionDTOFromJSONTyped,
    EmbeddedVotingKeyLinkTransactionDTOToJSON,
    EmbeddedVrfKeyLinkTransactionDTO,
    EmbeddedVrfKeyLinkTransactionDTOFromJSON,
    EmbeddedVrfKeyLinkTransactionDTOFromJSONTyped,
    EmbeddedVrfKeyLinkTransactionDTOToJSON,
    HashLockTransactionDTO,
    HashLockTransactionDTOFromJSON,
    HashLockTransactionDTOFromJSONTyped,
    HashLockTransactionDTOToJSON,
    MosaicAddressRestrictionTransactionDTO,
    MosaicAddressRestrictionTransactionDTOFromJSON,
    MosaicAddressRestrictionTransactionDTOFromJSONTyped,
    MosaicAddressRestrictionTransactionDTOToJSON,
    MosaicAliasTransactionDTO,
    MosaicAliasTransactionDTOFromJSON,
    MosaicAliasTransactionDTOFromJSONTyped,
    MosaicAliasTransactionDTOToJSON,
    MosaicDefinitionTransactionDTO,
    MosaicDefinitionTransactionDTOFromJSON,
    MosaicDefinitionTransactionDTOFromJSONTyped,
    MosaicDefinitionTransactionDTOToJSON,
    MosaicGlobalRestrictionTransactionDTO,
    MosaicGlobalRestrictionTransactionDTOFromJSON,
    MosaicGlobalRestrictionTransactionDTOFromJSONTyped,
    MosaicGlobalRestrictionTransactionDTOToJSON,
    MosaicMetadataTransactionDTO,
    MosaicMetadataTransactionDTOFromJSON,
    MosaicMetadataTransactionDTOFromJSONTyped,
    MosaicMetadataTransactionDTOToJSON,
    MosaicSupplyChangeTransactionDTO,
    MosaicSupplyChangeTransactionDTOFromJSON,
    MosaicSupplyChangeTransactionDTOFromJSONTyped,
    MosaicSupplyChangeTransactionDTOToJSON,
    MultisigAccountModificationTransactionDTO,
    MultisigAccountModificationTransactionDTOFromJSON,
    MultisigAccountModificationTransactionDTOFromJSONTyped,
    MultisigAccountModificationTransactionDTOToJSON,
    NamespaceMetadataTransactionDTO,
    NamespaceMetadataTransactionDTOFromJSON,
    NamespaceMetadataTransactionDTOFromJSONTyped,
    NamespaceMetadataTransactionDTOToJSON,
    NamespaceRegistrationTransactionDTO,
    NamespaceRegistrationTransactionDTOFromJSON,
    NamespaceRegistrationTransactionDTOFromJSONTyped,
    NamespaceRegistrationTransactionDTOToJSON,
    NodeKeyLinkTransactionDTO,
    NodeKeyLinkTransactionDTOFromJSON,
    NodeKeyLinkTransactionDTOFromJSONTyped,
    NodeKeyLinkTransactionDTOToJSON,
    SecretLockTransactionDTO,
    SecretLockTransactionDTOFromJSON,
    SecretLockTransactionDTOFromJSONTyped,
    SecretLockTransactionDTOToJSON,
    SecretProofTransactionDTO,
    SecretProofTransactionDTOFromJSON,
    SecretProofTransactionDTOFromJSONTyped,
    SecretProofTransactionDTOToJSON,
    TransactionMetaDTO,
    TransactionMetaDTOFromJSON,
    TransactionMetaDTOFromJSONTyped,
    TransactionMetaDTOToJSON,
    TransferTransactionDTO,
    TransferTransactionDTOFromJSON,
    TransferTransactionDTOFromJSONTyped,
    TransferTransactionDTOToJSON,
    VotingKeyLinkTransactionDTO,
    VotingKeyLinkTransactionDTOFromJSON,
    VotingKeyLinkTransactionDTOFromJSONTyped,
    VotingKeyLinkTransactionDTOToJSON,
    VrfKeyLinkTransactionDTO,
    VrfKeyLinkTransactionDTOFromJSON,
    VrfKeyLinkTransactionDTOFromJSONTyped,
    VrfKeyLinkTransactionDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface TransactionInfoDTO
 */
export interface TransactionInfoDTO {
    /**
     * Internal resource identifier.
     * @type {string}
     * @memberof TransactionInfoDTO
     */
    id: string;
    /**
     * 
     * @type {TransactionMetaDTO | EmbeddedTransactionMetaDTO}
     * @memberof TransactionInfoDTO
     */
    meta: TransactionMetaDTO | EmbeddedTransactionMetaDTO;
    /**
     * 
     * @type {AccountKeyLinkTransactionDTO | EmbeddedAccountKeyLinkTransactionDTO | NodeKeyLinkTransactionDTO | EmbeddedNodeKeyLinkTransactionDTO | VrfKeyLinkTransactionDTO | EmbeddedVrfKeyLinkTransactionDTO | VotingKeyLinkTransactionDTO | EmbeddedVotingKeyLinkTransactionDTO | AggregateTransactionDTO | AggregateTransactionExtendedDTO | HashLockTransactionDTO | EmbeddedHashLockTransactionDTO | SecretLockTransactionDTO | EmbeddedSecretLockTransactionDTO | SecretProofTransactionDTO | EmbeddedSecretProofTransactionDTO | AccountMetadataTransactionDTO | EmbeddedAccountMetadataTransactionDTO | MosaicMetadataTransactionDTO | EmbeddedMosaicMetadataTransactionDTO | NamespaceMetadataTransactionDTO | EmbeddedNamespaceMetadataTransactionDTO | MosaicDefinitionTransactionDTO | EmbeddedMosaicDefinitionTransactionDTO | MosaicSupplyChangeTransactionDTO | EmbeddedMosaicSupplyChangeTransactionDTO | NamespaceRegistrationTransactionDTO | EmbeddedNamespaceRegistrationTransactionDTO | AddressAliasTransactionDTO | EmbeddedAddressAliasTransactionDTO | MosaicAliasTransactionDTO | EmbeddedMosaicAliasTransactionDTO | MultisigAccountModificationTransactionDTO | EmbeddedMultisigAccountModificationTransactionDTO | AccountAddressRestrictionTransactionDTO | EmbeddedAccountAddressRestrictionTransactionDTO | AccountMosaicRestrictionTransactionDTO | EmbeddedAccountMosaicRestrictionTransactionDTO | AccountOperationRestrictionTransactionDTO | EmbeddedAccountOperationRestrictionTransactionDTO | MosaicGlobalRestrictionTransactionDTO | EmbeddedMosaicGlobalRestrictionTransactionDTO | MosaicAddressRestrictionTransactionDTO | EmbeddedMosaicAddressRestrictionTransactionDTO | TransferTransactionDTO | EmbeddedTransferTransactionDTO}
     * @memberof TransactionInfoDTO
     */
    transaction: AccountKeyLinkTransactionDTO | EmbeddedAccountKeyLinkTransactionDTO | NodeKeyLinkTransactionDTO | EmbeddedNodeKeyLinkTransactionDTO | VrfKeyLinkTransactionDTO | EmbeddedVrfKeyLinkTransactionDTO | VotingKeyLinkTransactionDTO | EmbeddedVotingKeyLinkTransactionDTO | AggregateTransactionDTO | AggregateTransactionExtendedDTO | HashLockTransactionDTO | EmbeddedHashLockTransactionDTO | SecretLockTransactionDTO | EmbeddedSecretLockTransactionDTO | SecretProofTransactionDTO | EmbeddedSecretProofTransactionDTO | AccountMetadataTransactionDTO | EmbeddedAccountMetadataTransactionDTO | MosaicMetadataTransactionDTO | EmbeddedMosaicMetadataTransactionDTO | NamespaceMetadataTransactionDTO | EmbeddedNamespaceMetadataTransactionDTO | MosaicDefinitionTransactionDTO | EmbeddedMosaicDefinitionTransactionDTO | MosaicSupplyChangeTransactionDTO | EmbeddedMosaicSupplyChangeTransactionDTO | NamespaceRegistrationTransactionDTO | EmbeddedNamespaceRegistrationTransactionDTO | AddressAliasTransactionDTO | EmbeddedAddressAliasTransactionDTO | MosaicAliasTransactionDTO | EmbeddedMosaicAliasTransactionDTO | MultisigAccountModificationTransactionDTO | EmbeddedMultisigAccountModificationTransactionDTO | AccountAddressRestrictionTransactionDTO | EmbeddedAccountAddressRestrictionTransactionDTO | AccountMosaicRestrictionTransactionDTO | EmbeddedAccountMosaicRestrictionTransactionDTO | AccountOperationRestrictionTransactionDTO | EmbeddedAccountOperationRestrictionTransactionDTO | MosaicGlobalRestrictionTransactionDTO | EmbeddedMosaicGlobalRestrictionTransactionDTO | MosaicAddressRestrictionTransactionDTO | EmbeddedMosaicAddressRestrictionTransactionDTO | TransferTransactionDTO | EmbeddedTransferTransactionDTO;
}

export function TransactionInfoDTOFromJSON(json: any): TransactionInfoDTO {
    return TransactionInfoDTOFromJSONTyped(json, false);
}

export function TransactionInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionInfoDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'meta': json['meta'],
        'transaction': json['transaction'],
    };
}

export function TransactionInfoDTOToJSON(value?: TransactionInfoDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'meta': value.meta,
        'transaction': value.transaction,
    };
}

