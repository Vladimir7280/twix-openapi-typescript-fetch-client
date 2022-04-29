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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeIdentityEqualityStrategyToJSON = exports.NodeIdentityEqualityStrategyFromJSONTyped = exports.NodeIdentityEqualityStrategyFromJSON = exports.NodeIdentityEqualityStrategy = void 0;
/**
 * Node equality strategy. Defines if the identifier for the node must be its public key or host.
 * @export
 * @enum {string}
 */
var NodeIdentityEqualityStrategy;
(function (NodeIdentityEqualityStrategy) {
    NodeIdentityEqualityStrategy["Host"] = "host";
    NodeIdentityEqualityStrategy["PublicKey"] = "public-key";
})(NodeIdentityEqualityStrategy = exports.NodeIdentityEqualityStrategy || (exports.NodeIdentityEqualityStrategy = {}));
function NodeIdentityEqualityStrategyFromJSON(json) {
    return NodeIdentityEqualityStrategyFromJSONTyped(json, false);
}
exports.NodeIdentityEqualityStrategyFromJSON = NodeIdentityEqualityStrategyFromJSON;
function NodeIdentityEqualityStrategyFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.NodeIdentityEqualityStrategyFromJSONTyped = NodeIdentityEqualityStrategyFromJSONTyped;
function NodeIdentityEqualityStrategyToJSON(value) {
    return value;
}
exports.NodeIdentityEqualityStrategyToJSON = NodeIdentityEqualityStrategyToJSON;