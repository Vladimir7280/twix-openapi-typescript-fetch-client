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
import { MosaicAddressRestrictionDTO, MosaicGlobalRestrictionDTO, Pagination } from './';
/**
 *
 * @export
 * @interface MosaicRestrictionsPage
 */
export interface MosaicRestrictionsPage {
    /**
     * Array of mosaic restrictions.
     * @type {Array<MosaicAddressRestrictionDTO | MosaicGlobalRestrictionDTO>}
     * @memberof MosaicRestrictionsPage
     */
    data: Array<MosaicAddressRestrictionDTO | MosaicGlobalRestrictionDTO>;
    /**
     *
     * @type {Pagination}
     * @memberof MosaicRestrictionsPage
     */
    pagination: Pagination;
}
export declare function MosaicRestrictionsPageFromJSON(json: any): MosaicRestrictionsPage;
export declare function MosaicRestrictionsPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicRestrictionsPage;
export declare function MosaicRestrictionsPageToJSON(value?: MosaicRestrictionsPage | null): any;