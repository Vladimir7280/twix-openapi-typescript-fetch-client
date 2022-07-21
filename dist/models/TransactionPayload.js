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
exports.TransactionPayloadToJSON = exports.TransactionPayloadFromJSONTyped = exports.TransactionPayloadFromJSON = void 0;
const runtime_1 = require("../runtime");
function TransactionPayloadFromJSON(json) {
    return TransactionPayloadFromJSONTyped(json, false);
}
exports.TransactionPayloadFromJSON = TransactionPayloadFromJSON;
function TransactionPayloadFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'payload': !runtime_1.exists(json, 'payload') ? undefined : json['payload'],
    };
}
exports.TransactionPayloadFromJSONTyped = TransactionPayloadFromJSONTyped;
function TransactionPayloadToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'payload': value.payload,
    };
}
exports.TransactionPayloadToJSON = TransactionPayloadToJSON;
