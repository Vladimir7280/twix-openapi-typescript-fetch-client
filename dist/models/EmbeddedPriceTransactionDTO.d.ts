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
import { NetworkTypeEnum } from './';
/**
 *
 * @export
 * @interface EmbeddedPriceTransactionDTO
 */
export interface EmbeddedPriceTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedPriceTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedPriceTransactionDTO
     */
    version: number;
    /**
     *
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedPriceTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     *
     * @type {number}
     * @memberof EmbeddedPriceTransactionDTO
     */
    type: number;
    /**
     * A number that allows uint 64 values represented with a string.
     * @type {string}
     * @memberof EmbeddedPriceTransactionDTO
     */
    blockHeight: string;
    /**
     * A number that allows uint 64 values represented with a string.
     * @type {string}
     * @memberof EmbeddedPriceTransactionDTO
     */
    highPrice: string;
    /**
     * A number that allows uint 64 values represented with a string.
     * @type {string}
     * @memberof EmbeddedPriceTransactionDTO
     */
    lowPrice: string;
}
export declare function EmbeddedPriceTransactionDTOFromJSON(json: any): EmbeddedPriceTransactionDTO;
export declare function EmbeddedPriceTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedPriceTransactionDTO;
export declare function EmbeddedPriceTransactionDTOToJSON(value?: EmbeddedPriceTransactionDTO | null): any;