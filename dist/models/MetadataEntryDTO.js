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
exports.MetadataEntryDTOToJSON = exports.MetadataEntryDTOFromJSONTyped = exports.MetadataEntryDTOFromJSON = void 0;
const runtime_1 = require("../runtime");
function MetadataEntryDTOFromJSON(json) {
    return MetadataEntryDTOFromJSONTyped(json, false);
}
exports.MetadataEntryDTOFromJSON = MetadataEntryDTOFromJSON;
function MetadataEntryDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'compositeHash': json['compositeHash'],
        'sourceAddress': json['sourceAddress'],
        'targetAddress': json['targetAddress'],
        'scopedMetadataKey': json['scopedMetadataKey'],
        'targetId': !runtime_1.exists(json, 'targetId') ? undefined : json['targetId'],
        'metadataType': json['metadataType'],
        'value': json['value'],
    };
}
exports.MetadataEntryDTOFromJSONTyped = MetadataEntryDTOFromJSONTyped;
function MetadataEntryDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
        'compositeHash': value.compositeHash,
        'sourceAddress': value.sourceAddress,
        'targetAddress': value.targetAddress,
        'scopedMetadataKey': value.scopedMetadataKey,
        'targetId': value.targetId,
        'metadataType': value.metadataType,
        'value': value.value,
    };
}
exports.MetadataEntryDTOToJSON = MetadataEntryDTOToJSON;
