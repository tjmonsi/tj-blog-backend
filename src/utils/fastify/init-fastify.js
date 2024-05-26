import Fastify from 'fastify';
import '../helpers/load-env.js';

/**
 * @param {*} opts
 * @returns {Promise<FastifyInstance<Http2SecureServer, Http2ServerRequest, Http2ServerResponse, FastifyLoggerInstance>>}
 */
export async function initFastify (opts) {
  const {
    CONNECTION_TIMEOUT = 0,
    KEEP_ALIVE_TIMEOUT = 5000,
    MAX_REQUESTS_PER_SOCKET = 0,
    REQUEST_TIMEOUT = 0,
    IGNORE_TRAILING_SLASH = '',
    MAX_PARAM_LENGTH = 100,
    BODY_LIMIT = 1048576,
    ON_PROTO_POISONING = 'error',
    ON_CONSTRUCTOR_POISONING = 'error',
    TRUST_PROXY = true,
    LOGGER_LEVEL = 'info',
    VSCODE_DEBUG = 'false'
  } = /** @type {*} */(process.env);

  /** @type {*} */
  const envToLogger = {
    development: {
      transport: {
        target: 'pino-pretty'
      },
      level: LOGGER_LEVEL
    },
    production: true,
    test: false
  };

  /**
   * Setting up the app given options
   */
  return Fastify({
    connectionTimeout: parseInt(CONNECTION_TIMEOUT, 10),
    keepAliveTimeout: parseInt(KEEP_ALIVE_TIMEOUT, 10),
    maxRequestsPerSocket: parseInt(MAX_REQUESTS_PER_SOCKET, 10),
    requestTimeout: parseInt(REQUEST_TIMEOUT, 10),
    ignoreTrailingSlash: !!IGNORE_TRAILING_SLASH,
    maxParamLength: parseInt(MAX_PARAM_LENGTH, 10),
    bodyLimit: parseInt(BODY_LIMIT, 10),
    onProtoPoisoning: ON_PROTO_POISONING,
    onConstructorPoisoning: ON_CONSTRUCTOR_POISONING,
    trustProxy: !!TRUST_PROXY,
    logger: envToLogger[VSCODE_DEBUG ? 'development' : process.env.NODE_ENV || 'development'],
    ...opts
  });
}
