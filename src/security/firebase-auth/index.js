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

import { getAuth } from 'firebase-admin/auth';
import { app } from '../../utils/firebase-admin/index.js';

/**
 * @this {{ app: FastifyInstance<Http2SecureServer, Http2ServerRequest, Http2ServerResponse, FastifyLoggerInstance> | * }}
 * @param {FastifyRequest<RouteGenericInterface, Http2SecureServer, Http2ServerRequest> | *} request
 * @param {FastifyReply<Http2SecureServer, Http2ServerRequest, Http2ServerResponse, RouteGenericInterface, unknown> | *} response
 */
export async function firebaseAuth (request, response) {
  const { app: fastify } = this;
  const { headers } = request;
  const { authorization } = headers;

  if (!authorization) {
    return response.unauthorized();
  }

  const [, token] = authorization.split('Bearer ');

  /* c8 ignore start */
  if (!token) {
    return response.unauthorized();
  }

  try {
    await getAuth(app).verifyIdToken(token);
  } catch (error) {
    fastify.logger.warning({
      error
    });
    return response.unauthorized();
  }
  /* c8 ignore end */
}
