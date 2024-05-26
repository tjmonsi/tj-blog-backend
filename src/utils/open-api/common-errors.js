/**
 * @module
 * @description Common response errors
 *
 * @license
 * Copyright 2020, Senti Techlabs Inc..
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
**/

import { responses } from './components.js';

/**
 * @param {Array<number>} excludeStatuses
 * @param {Array<number>} includeStatuses
 * @returns {Object<number, *>}
 */
export const commonErrors = (excludeStatuses = [401, 403, 410, 411, 404, 406], includeStatuses = []) => {
  /**
   * @type {Array<number>}
   */
  const defaultExcludeStatuses = [
    402,
    405,
    407,
    409,
    412,
    413,
    414,
    415,
    416,
    417,
    421,
    422,
    423,
    424,
    426,
    428,
    431,
    451,
    501,
    502,
    504,
    505,
    507
  ];

  /**
   * @type {Array<number>}
   */
  const newExcludeStatuses = [
    ...excludeStatuses,
    ...defaultExcludeStatuses
  ];

  /** @type {Object<number?, *>} */
  const commonErrorResponses = {
    400: {
      $ref: `${responses}/malformedResponse`
    },
    401: {
      $ref: `${responses}/unauthorizedResponse`
    },
    402: {
      $ref: `${responses}/paymentRequiredResponse`
    },
    403: {
      $ref: `${responses}/forbiddenResponse`
    },
    404: {
      $ref: `${responses}/notFoundResponse`
    },
    405: {
      $ref: `${responses}/methodNotAllowedResponse`
    },
    406: {
      $ref: `${responses}/notAcceptableResponse`
    },
    408: {
      $ref: `${responses}/timeoutResponse`
    },
    409: {
      $ref: `${responses}/conflictResponse`
    },
    410: {
      $ref: `${responses}/goneResponse`
    },
    411: {
      $ref: `${responses}/lengthRequiredResponse`
    },
    412: {
      $ref: `${responses}/preconditionedFailedResponse`
    },
    413: {
      $ref: `${responses}/payloadTooLargeResponse`
    },
    414: {
      $ref: `${responses}/uriTooLongResponse`
    },
    415: {
      $ref: `${responses}/unsupportedMediaTypeResponse`
    },
    416: {
      $ref: `${responses}/rangeNotSatisfiableResponse`
    },
    417: {
      $ref: `${responses}/expectationFailedResponse`
    },
    418: {
      $ref: `${responses}/teapotResponse`
    },
    421: {
      $ref: `${responses}/misdirectedResponse`
    },
    422: {
      $ref: `${responses}/unprocessableEntityResponse`
    },
    423: {
      $ref: `${responses}/lockedResponse`
    },
    424: {
      $ref: `${responses}/failedDependencyResponse`
    },
    426: {
      $ref: `${responses}/upgradeRequiredResponse`
    },
    428: {
      $ref: `${responses}/preconditionRequiredResponse`
    },
    429: {
      $ref: `${responses}/rateLimitResponse`
    },
    431: {
      $ref: `${responses}/requestHeaderFieldsTooLargeResponse`
    },
    451: {
      $ref: `${responses}/unavailableLegalResponse`
    },
    500: {
      $ref: `${responses}/internalServerErrorResponse`
    },
    501: {
      $ref: `${responses}/notImplementedResponse`
    },
    502: {
      $ref: `${responses}/badGatewayResponse`
    },
    503: {
      $ref: `${responses}/serviceUnavailableResponse`
    },
    504: {
      $ref: `${responses}/gatewayTimeoutResponse`
    },
    507: {
      $ref: `${responses}/storageInsufficientResponse`
    }
  };

  /* c8 ignore start */
  for (const statusCode of newExcludeStatuses) {
    if (statusCode === 0) {
      /** @type {Object<number?, *>} */
      const newCommonErrorResponses = {};

      for (const statusCode of includeStatuses) {
        // eslint-disable-next-line
        newCommonErrorResponses[statusCode] = commonErrorResponses[statusCode];
      }

      return newCommonErrorResponses;
    }

    if (includeStatuses.indexOf(statusCode) < 0) {
      // eslint-disable-next-line
      delete commonErrorResponses[statusCode];
    }
  }
  /* c8 ignore end */

  return commonErrorResponses;
};
