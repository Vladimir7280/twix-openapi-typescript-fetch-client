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
exports.TransactionStatusRoutesApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class TransactionStatusRoutesApi extends runtime.BaseAPI {
    /**
     * Returns the transaction status for a given hash.
     * Get transaction status
     */
    getTransactionStatusRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hash === null || requestParameters.hash === undefined) {
                throw new runtime.RequiredError('hash', 'Required parameter requestParameters.hash was null or undefined when calling getTransactionStatus.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/transactionStatus/{hash}`.replace(`{${"hash"}}`, encodeURIComponent(String(requestParameters.hash))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.TransactionStatusDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Returns the transaction status for a given hash.
     * Get transaction status
     */
    getTransactionStatus(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getTransactionStatusRaw({ hash: hash });
            return yield response.value();
        });
    }
    /**
     * Returns an array of transaction statuses for a given array of transaction hashes.
     * Get transaction statuses
     */
    getTransactionStatusesRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.transactionHashes === null || requestParameters.transactionHashes === undefined) {
                throw new runtime.RequiredError('transactionHashes', 'Required parameter requestParameters.transactionHashes was null or undefined when calling getTransactionStatuses.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/transactionStatus`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.TransactionHashesToJSON)(requestParameters.transactionHashes),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.TransactionStatusDTOFromJSON));
        });
    }
    /**
     * Returns an array of transaction statuses for a given array of transaction hashes.
     * Get transaction statuses
     */
    getTransactionStatuses(transactionHashes) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getTransactionStatusesRaw({ transactionHashes: transactionHashes });
            return yield response.value();
        });
    }
}
exports.TransactionStatusRoutesApi = TransactionStatusRoutesApi;