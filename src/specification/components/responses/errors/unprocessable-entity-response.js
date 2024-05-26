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

export const unprocessableEntityResponse = {
  description: 'Unprocessable Entity Response',
  content: {
    'application/json': {
      schema: {
        $ref: `${schemas}/commonError`,
        description: 'The request was well-formed but was unable to be followed due to semantic errors.',
        example: {
          success: false,
          statusCode: 422,
          error: 'request/unprocessable-entity',
          code: 'request/unprocessable-entity',
          message: 'The request was well-formed but was unable to be followed due to semantic errors.'
        }
      }
    }
  }
};
