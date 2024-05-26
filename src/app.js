import openAPIGlue from 'fastify-openapi-glue';
import sensible from '@fastify/sensible';
import sentry from '@zentered/fastify-sentry';
import helmet from '@fastify/helmet';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import swaggerUi from '@scalar/fastify-api-reference';
import { initFastify } from './utils/fastify/init-fastify.js';
import { getSentryOptions } from './utils/sentry/index.js';
import { getLogger, closeLogger } from './utils/google/logging/index.js';
import { errorHandler } from './utils/helpers/error-handler.js';
import { notFoundHanlder } from './utils/helpers/not-found-handler.js';
import { getHelmetOptions } from './utils/helmet/index.js';
import { getCorsOptions } from './utils/cors/index.js';
import { Service } from './service/index.js';
import { Security } from './security/index.js';
import { specification } from './specification/index.js';
import './utils/helpers/load-env.js';

/**
 * Build fastify instance
 *
 * @param {*} opts
 * @returns {Promise<FastifyInstance<Http2SecureServer, Http2ServerRequest, Http2ServerResponse, FastifyLoggerInstance>>}
 */
export async function build (opts = {}) {
  const logger = await getLogger();
  const fastify = await initFastify(opts);
  await fastify.register(sensible);

  /* c8 ignore start */
  if (process.env.SENTRY_DSN) {
    await fastify.register(sentry, getSentryOptions());
  } else {
    await fastify.setErrorHandler(errorHandler);
  }
  /* c8 ignore end */

  await fastify.setNotFoundHandler(notFoundHanlder);
  await fastify.register(helmet, getHelmetOptions());
  await fastify.register(cors, getCorsOptions());

  fastify.decorate('logger', logger);

  const serviceHandlers = new Service(fastify);
  const securityHandlers = new Security(fastify);

  const options = {
    specification,
    serviceHandlers,
    securityHandlers,
    noAdditional: true
  };

  console.log(!!process.env.EXPOSE_DOC_ROUTE)

  const swaggerOptions = {
    // @ts-ignore
    openapi: specification,
    routePrefix: `${process.env.DOC_ROUTE_PREFIX}`,
    exposeRoute: !!process.env.EXPOSE_DOC_ROUTE
  };

  fastify.register(swagger, swaggerOptions);
  fastify.register(openAPIGlue, options);
  fastify.register(swaggerUi, swaggerOptions);

  // CLOSE EVERY OPENED CONNECTION HERE
  fastify.addHook('onClose', async () => {
    await closeLogger();
    console.log('Closing...');
  });

  return fastify;
}
