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
exports.NodeRoutesApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class NodeRoutesApi extends runtime.BaseAPI {
    /**
     * Supplies information regarding the connection and services status.
     * Get the node health information
     */
    getNodeHealthRaw() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/node/health`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.NodeHealthInfoDTOFromJSON(jsonValue));
        });
    }
    /**
     * Supplies information regarding the connection and services status.
     * Get the node health information
     */
    getNodeHealth() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNodeHealthRaw();
            return yield response.value();
        });
    }
    /**
     * Supplies additional information about the application running on a node.
     * Get the node information
     */
    getNodeInfoRaw() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/node/info`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.NodeInfoDTOFromJSON(jsonValue));
        });
    }
    /**
     * Supplies additional information about the application running on a node.
     * Get the node information
     */
    getNodeInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNodeInfoRaw();
            return yield response.value();
        });
    }
    /**
     * Gets the list of peers visible by the node.
     * Get peers information
     */
    getNodePeersRaw() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/node/peers`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.NodeInfoDTOFromJSON));
        });
    }
    /**
     * Gets the list of peers visible by the node.
     * Get peers information
     */
    getNodePeers() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNodePeersRaw();
            return yield response.value();
        });
    }
    /**
     * Returns storage information about the node.
     * Get the storage information of the node
     */
    getNodeStorageRaw() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/node/storage`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.StorageInfoDTOFromJSON(jsonValue));
        });
    }
    /**
     * Returns storage information about the node.
     * Get the storage information of the node
     */
    getNodeStorage() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNodeStorageRaw();
            return yield response.value();
        });
    }
    /**
     * Gets the node time at the moment the reply was sent and received.
     * Get the node time
     */
    getNodeTimeRaw() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/node/time`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.NodeTimeDTOFromJSON(jsonValue));
        });
    }
    /**
     * Gets the node time at the moment the reply was sent and received.
     * Get the node time
     */
    getNodeTime() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNodeTimeRaw();
            return yield response.value();
        });
    }
    /**
     * Returns the version of the running catapult-rest component.
     * Get the version of the running REST component
     */
    getServerInfoRaw() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/node/server`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.ServerInfoDTOFromJSON(jsonValue));
        });
    }
    /**
     * Returns the version of the running catapult-rest component.
     * Get the version of the running REST component
     */
    getServerInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getServerInfoRaw();
            return yield response.value();
        });
    }
    /**
     * Returns array of unlocked account public keys.
     * Get the unlocked harvesting account public keys.
     */
    getUnlockedAccountRaw() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/node/unlockedaccount`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.UnlockedAccountDTOFromJSON(jsonValue));
        });
    }
    /**
     * Returns array of unlocked account public keys.
     * Get the unlocked harvesting account public keys.
     */
    getUnlockedAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getUnlockedAccountRaw();
            return yield response.value();
        });
    }
}
exports.NodeRoutesApi = NodeRoutesApi;
