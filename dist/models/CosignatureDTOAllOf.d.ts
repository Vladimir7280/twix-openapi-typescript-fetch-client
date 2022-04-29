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
/**
 *
 * @export
 * @interface CosignatureDTOAllOf
 */
export interface CosignatureDTOAllOf {
    /**
     * Cosignature version.
     * @type {string}
     * @memberof CosignatureDTOAllOf
     */
    version: string;
    /**
     * Public key.
     * @type {string}
     * @memberof CosignatureDTOAllOf
     */
    signerPublicKey: string;
}
export declare function CosignatureDTOAllOfFromJSON(json: any): CosignatureDTOAllOf;
export declare function CosignatureDTOAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosignatureDTOAllOf;
export declare function CosignatureDTOAllOfToJSON(value?: CosignatureDTOAllOf | null): any;