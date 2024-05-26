/**
 * @module
 * @description Security Class
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

import { googleAuth } from './google-auth/index.js';
import { firebaseAuth } from './firebase-auth/index.js';

export class Security {
  /**
   * @param {FastifyInstance<Http2SecureServer, Http2ServerRequest, Http2ServerResponse, FastifyLoggerInstance>} app
   */
  constructor (app) {
    this.app = app;
  }

  /* c8 ignore start */
  /**
   * @param {FastifyRequest<*>} request
   * @param {FastifyReply<Response>} response
   */
  async googleAuth (request, response) {
    return googleAuth.bind(this)(request, response);
  }

  /**
   * @param {FastifyRequest<*>} request
   * @param {FastifyReply<Response>} response
   */
  async firebaseAuth (request, response) {
    return firebaseAuth.bind(this)(request, response);
  }

  /* c8 ignore end */
}
