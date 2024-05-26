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

import { JWT } from 'google-auth-library';

/**
 * @this {{ app: FastifyInstance<Http2SecureServer, Http2ServerRequest, Http2ServerResponse, FastifyLoggerInstance> | * }}
 * @param {FastifyRequest<RouteGenericInterface, Http2SecureServer, Http2ServerRequest> | *} request
 * @param {FastifyReply<Http2SecureServer, Http2ServerRequest, Http2ServerResponse, RouteGenericInterface, unknown> | *} response
 */
export async function googleAuth (request, response) {
  const { app: fastify } = this;
  const { headers } = request;
  const { authorization } = headers;

  if (!authorization) {
    return response.unauthorized();
  }

  const [, idToken] = authorization.split('Bearer ');
  const client = new JWT();

  try {
    /* c8 ignore start */
    const loginTicket = await client.verifyIdToken({
      idToken
    });

    const { alg, typ } = /** @type {*} */(loginTicket.getEnvelope());
    const { email, email_verified: verified } = /** @type {*} */(loginTicket.getPayload());

    // TODO: check if we can use aud, iat, iss for more verification

    if (!verified) {
      console.log(`Email ${email} is not verified`);
      return response.unauthorized('auth/unauthorized');
    }

    if (alg !== 'RS256') {
      console.log(`JWT for ${email} is not RS256`);
      return response.unauthorized('auth/unauthorized');
    }

    if (typ !== 'JWT') {
      console.log(`Token for ${email} is not JWT`);
      return response.unauthorized('auth/unauthorized');
    }
    /* c8 ignore end */
  } catch (error) {
    fastify.logger.warning({
      error
    });
    return response.unauthorized();
  }
}
