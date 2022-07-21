"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamespaceRoutesApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class NamespaceRoutesApi extends runtime.BaseAPI {
    /**
     * Returns friendly names for accounts.
     * Get readable names for a set of accountIds
     */
    getAccountsNamesRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.addresses === null || requestParameters.addresses === undefined) {
                throw new runtime.RequiredError('addresses', 'Required parameter requestParameters.addresses was null or undefined when calling getAccountsNames.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/namespaces/account/names`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.AddressesToJSON(requestParameters.addresses),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.AccountsNamesDTOFromJSON(jsonValue));
        });
    }
    /**
     * Returns friendly names for accounts.
     * Get readable names for a set of accountIds
     */
    getAccountsNames(addresses) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAccountsNamesRaw({ addresses: addresses });
            return yield response.value();
        });
    }
    /**
     * Returns friendly names for mosaics.
     * Get readable names for a set of mosaics
     */
    getMosaicsNamesRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.mosaicIds === null || requestParameters.mosaicIds === undefined) {
                throw new runtime.RequiredError('mosaicIds', 'Required parameter requestParameters.mosaicIds was null or undefined when calling getMosaicsNames.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/namespaces/mosaic/names`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.MosaicIdsToJSON(requestParameters.mosaicIds),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.MosaicsNamesDTOFromJSON(jsonValue));
        });
    }
    /**
     * Returns friendly names for mosaics.
     * Get readable names for a set of mosaics
     */
    getMosaicsNames(mosaicIds) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getMosaicsNamesRaw({ mosaicIds: mosaicIds });
            return yield response.value();
        });
    }
    /**
     * Gets the namespace for a given namespace identifier.
     * Get namespace information
     */
    getNamespaceRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.namespaceId === null || requestParameters.namespaceId === undefined) {
                throw new runtime.RequiredError('namespaceId', 'Required parameter requestParameters.namespaceId was null or undefined when calling getNamespace.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/namespaces/{namespaceId}`.replace(`{${"namespaceId"}}`, encodeURIComponent(String(requestParameters.namespaceId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.NamespaceInfoDTOFromJSON(jsonValue));
        });
    }
    /**
     * Gets the namespace for a given namespace identifier.
     * Get namespace information
     */
    getNamespace(namespaceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNamespaceRaw({ namespaceId: namespaceId });
            return yield response.value();
        });
    }
    /**
     * Gets the namespace merkle for a given namespace identifier.
     * Get namespace merkle information
     */
    getNamespaceMerkleRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.namespaceId === null || requestParameters.namespaceId === undefined) {
                throw new runtime.RequiredError('namespaceId', 'Required parameter requestParameters.namespaceId was null or undefined when calling getNamespaceMerkle.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/namespaces/{namespaceId}/merkle`.replace(`{${"namespaceId"}}`, encodeURIComponent(String(requestParameters.namespaceId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.MerkleStateInfoDTOFromJSON(jsonValue));
        });
    }
    /**
     * Gets the namespace merkle for a given namespace identifier.
     * Get namespace merkle information
     */
    getNamespaceMerkle(namespaceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNamespaceMerkleRaw({ namespaceId: namespaceId });
            return yield response.value();
        });
    }
    /**
     * Returns friendly names for namespaces.
     * Get readable names for a set of namespaces
     */
    getNamespacesNamesRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.namespaceIds === null || requestParameters.namespaceIds === undefined) {
                throw new runtime.RequiredError('namespaceIds', 'Required parameter requestParameters.namespaceIds was null or undefined when calling getNamespacesNames.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/namespaces/names`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.NamespaceIdsToJSON(requestParameters.namespaceIds),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.NamespaceNameDTOFromJSON));
        });
    }
    /**
     * Returns friendly names for namespaces.
     * Get readable names for a set of namespaces
     */
    getNamespacesNames(namespaceIds) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNamespacesNamesRaw({ namespaceIds: namespaceIds });
            return yield response.value();
        });
    }
    /**
     * Gets an array of namespaces.
     * Search namespaces
     */
    searchNamespacesRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.ownerAddress !== undefined) {
                queryParameters['ownerAddress'] = requestParameters.ownerAddress;
            }
            if (requestParameters.registrationType !== undefined) {
                queryParameters['registrationType'] = requestParameters.registrationType;
            }
            if (requestParameters.level0 !== undefined) {
                queryParameters['level0'] = requestParameters.level0;
            }
            if (requestParameters.aliasType !== undefined) {
                queryParameters['aliasType'] = requestParameters.aliasType;
            }
            if (requestParameters.pageSize !== undefined) {
                queryParameters['pageSize'] = requestParameters.pageSize;
            }
            if (requestParameters.pageNumber !== undefined) {
                queryParameters['pageNumber'] = requestParameters.pageNumber;
            }
            if (requestParameters.offset !== undefined) {
                queryParameters['offset'] = requestParameters.offset;
            }
            if (requestParameters.order !== undefined) {
                queryParameters['order'] = requestParameters.order;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/namespaces`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.NamespacePageFromJSON(jsonValue));
        });
    }
    /**
     * Gets an array of namespaces.
     * Search namespaces
     */
    searchNamespaces(ownerAddress, registrationType, level0, aliasType, pageSize, pageNumber, offset, order) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.searchNamespacesRaw({ ownerAddress: ownerAddress, registrationType: registrationType, level0: level0, aliasType: aliasType, pageSize: pageSize, pageNumber: pageNumber, offset: offset, order: order });
            return yield response.value();
        });
    }
}
exports.NamespaceRoutesApi = NamespaceRoutesApi;
