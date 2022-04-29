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
exports.MerkleTreeNodeTypeEnumToJSON = exports.MerkleTreeNodeTypeEnumFromJSONTyped = exports.MerkleTreeNodeTypeEnumFromJSON = exports.MerkleTreeNodeTypeEnum = void 0;
/**
 * Type of Merkle tree node:
 * * 0 - Branch node.
 * * 255 - Leaf node.
 * @export
 * @enum {string}
 */
var MerkleTreeNodeTypeEnum;
(function (MerkleTreeNodeTypeEnum) {
    MerkleTreeNodeTypeEnum[MerkleTreeNodeTypeEnum["NUMBER_0"] = 0] = "NUMBER_0";
    MerkleTreeNodeTypeEnum[MerkleTreeNodeTypeEnum["NUMBER_255"] = 255] = "NUMBER_255";
})(MerkleTreeNodeTypeEnum = exports.MerkleTreeNodeTypeEnum || (exports.MerkleTreeNodeTypeEnum = {}));
function MerkleTreeNodeTypeEnumFromJSON(json) {
    return MerkleTreeNodeTypeEnumFromJSONTyped(json, false);
}
exports.MerkleTreeNodeTypeEnumFromJSON = MerkleTreeNodeTypeEnumFromJSON;
function MerkleTreeNodeTypeEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.MerkleTreeNodeTypeEnumFromJSONTyped = MerkleTreeNodeTypeEnumFromJSONTyped;
function MerkleTreeNodeTypeEnumToJSON(value) {
    return value;
}
exports.MerkleTreeNodeTypeEnumToJSON = MerkleTreeNodeTypeEnumToJSON;