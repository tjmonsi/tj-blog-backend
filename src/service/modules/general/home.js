/**
 * Simple home service function that returns a simple object
 *
 * @this {{ app: FastifyInstance<*>}}
 * @param {FastifyRequest<RouteGenericInterface, Http2SecureServer, Http2ServerRequest> | *} request
 * @param {FastifyReply<Http2SecureServer, Http2ServerRequest, Http2ServerResponse, RouteGenericInterface, unknown> | *} _response
 * @returns {Promise<{ success: boolean }>}
 */
export async function home (request, _response) {
  const { app: fastify } = this;
  const { logger } = fastify;
  const { id: reqId } = request;

  logger.log({
    reqId,
    hello: 'world'
  });

  return {
    success: true
  };
}
