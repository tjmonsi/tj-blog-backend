import { getLogger } from '../google/logging/index.js';
import { pathToRegexp } from 'path-to-regexp';
import { paths } from '../../specification/paths/index.js';
import './load-env.js';

/**
 *
 * @param {FastifyRequest<RouteGenericInterface, Http2SecureServer, Http2ServerRequest>} request
 * @param {FastifyReply<Http2SecureServer, Http2ServerRequest, Http2ServerResponse, RouteGenericInterface, unknown>} response
 */
export function notFoundHanlder (request, response) {
  const logger = getLogger();
  /** @type {*} */
  let keys = [];
  let exec = null;
  let re = null;

  let url = request.url;

  try {
    const [newUrl] = request.url.split('?');
    url = newUrl;
  } catch (error) {
    if (error instanceof Error) {
      logger.error({
        location: 'src/app.js - fastify.setNotFoundHandler',
        error: {
          message: error.message
        }
      });
    }
  }

  for (const route of Object.keys(paths)) {
    keys = [];
    re = pathToRegexp(`/${route}`, keys);

    exec = re.exec(url);

    if (exec) return response.methodNotAllowed();
  }
  console.log('not-found:', url);
  return response.notFound();
}
