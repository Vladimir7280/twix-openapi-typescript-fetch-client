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
import { EmbeddedAccountAddressRestrictionTransactionDTO, EmbeddedAccountKeyLinkTransactionDTO, EmbeddedAccountMetadataTransactionDTO, EmbeddedAccountMosaicRestrictionTransactionDTO, EmbeddedAccountOperationRestrictionTransactionDTO, EmbeddedAddressAliasTransactionDTO, EmbeddedHashLockTransactionDTO, EmbeddedMosaicAddressRestrictionTransactionDTO, EmbeddedMosaicAliasTransactionDTO, EmbeddedMosaicDefinitionTransactionDTO, EmbeddedMosaicGlobalRestrictionTransactionDTO, EmbeddedMosaicMetadataTransactionDTO, EmbeddedMosaicSupplyChangeTransactionDTO, EmbeddedMultisigAccountModificationTransactionDTO, EmbeddedNamespaceMetadataTransactionDTO, EmbeddedNamespaceRegistrationTransactionDTO, EmbeddedNodeKeyLinkTransactionDTO, EmbeddedPriceTransactionDTO, EmbeddedSecretLockTransactionDTO, EmbeddedSecretProofTransactionDTO, EmbeddedTransactionMetaDTO, EmbeddedTransferTransactionDTO, EmbeddedVotingKeyLinkTransactionDTO, EmbeddedVrfKeyLinkTransactionDTO } from './';
/**
 *
 * @export
 * @interface EmbeddedTransactionInfoDTO
 */
export interface EmbeddedTransactionInfoDTO {
    /**
     * Internal resource identifier.
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTO
     */
    id: string;
    /**
     *
     * @type {EmbeddedTransactionMetaDTO}
     * @memberof EmbeddedTransactionInfoDTO
     */
    meta: EmbeddedTransactionMetaDTO;
    /**
     *
     * @type {EmbeddedAccountKeyLinkTransactionDTO | EmbeddedNodeKeyLinkTransactionDTO | EmbeddedVrfKeyLinkTransactionDTO | EmbeddedVotingKeyLinkTransactionDTO | EmbeddedHashLockTransactionDTO | EmbeddedSecretLockTransactionDTO | EmbeddedSecretProofTransactionDTO | EmbeddedAccountMetadataTransactionDTO | EmbeddedMosaicMetadataTransactionDTO | EmbeddedNamespaceMetadataTransactionDTO | EmbeddedMosaicDefinitionTransactionDTO | EmbeddedMosaicSupplyChangeTransactionDTO | EmbeddedNamespaceRegistrationTransactionDTO | EmbeddedAddressAliasTransactionDTO | EmbeddedMosaicAliasTransactionDTO | EmbeddedMultisigAccountModificationTransactionDTO | EmbeddedAccountAddressRestrictionTransactionDTO | EmbeddedAccountMosaicRestrictionTransactionDTO | EmbeddedAccountOperationRestrictionTransactionDTO | EmbeddedMosaicGlobalRestrictionTransactionDTO | EmbeddedMosaicAddressRestrictionTransactionDTO | EmbeddedTransferTransactionDTO | EmbeddedPriceTransactionDTO}
     * @memberof EmbeddedTransactionInfoDTO
     */
    transaction: EmbeddedAccountKeyLinkTransactionDTO | EmbeddedNodeKeyLinkTransactionDTO | EmbeddedVrfKeyLinkTransactionDTO | EmbeddedVotingKeyLinkTransactionDTO | EmbeddedHashLockTransactionDTO | EmbeddedSecretLockTransactionDTO | EmbeddedSecretProofTransactionDTO | EmbeddedAccountMetadataTransactionDTO | EmbeddedMosaicMetadataTransactionDTO | EmbeddedNamespaceMetadataTransactionDTO | EmbeddedMosaicDefinitionTransactionDTO | EmbeddedMosaicSupplyChangeTransactionDTO | EmbeddedNamespaceRegistrationTransactionDTO | EmbeddedAddressAliasTransactionDTO | EmbeddedMosaicAliasTransactionDTO | EmbeddedMultisigAccountModificationTransactionDTO | EmbeddedAccountAddressRestrictionTransactionDTO | EmbeddedAccountMosaicRestrictionTransactionDTO | EmbeddedAccountOperationRestrictionTransactionDTO | EmbeddedMosaicGlobalRestrictionTransactionDTO | EmbeddedMosaicAddressRestrictionTransactionDTO | EmbeddedTransferTransactionDTO | EmbeddedPriceTransactionDTO;
}
export declare function EmbeddedTransactionInfoDTOFromJSON(json: any): EmbeddedTransactionInfoDTO;
export declare function EmbeddedTransactionInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedTransactionInfoDTO;
export declare function EmbeddedTransactionInfoDTOToJSON(value?: EmbeddedTransactionInfoDTO | null): any;
