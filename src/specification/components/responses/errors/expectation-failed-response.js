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

export const expectationFailedResponse = {
  description: 'Expectation Failed Response',
  content: {
    'application/json': {
      schema: {
        $ref: `${schemas}/commonError`,
        description: 'This response code means the expectation indicated by the Expect request header field cannot be met by the server.',
        example: {
          success: false,
          statusCode: 417,
          error: 'request/expectation-failed',
          code: 'request/expectation-failed',
          message: 'The server cannot meet the requirements of the Expect request-header field.'
        }
      }
    }
  }
};
