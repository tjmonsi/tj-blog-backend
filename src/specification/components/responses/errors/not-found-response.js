/**
 * @module
 * @description Payment Required Response specifications
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

import { schemas } from '../../../../utils/open-api/components.js';

export const notFoundResponse = {
  description: 'Not Found Response',
  content: {
    'application/json': {
      schema: {
        $ref: `${schemas}/commonError`,
        description: 'The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist.',
        example: {
          success: false,
          statusCode: 404,
          error: 'request/not-found',
          code: 'request/not-found',
          message: 'The server has not found anything matching the Request-URI. No indication is given of whether the condition is temporary or permanent.'
        }
      }
    }
  }
};
