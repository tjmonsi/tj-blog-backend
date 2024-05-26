import { getLogger } from '../google/logging/index.js';
import { generalErrors } from '../errors/general-errors.js';
import { errorSynonyms } from '../errors/error-synonym.js';
import { additionalErrors } from '../errors/additional-errors.js';

/**
 *
 * @param {FastifyError} error
 * @param {FastifyRequest<RouteGenericInterface, Http2SecureServer, Http2ServerRequest>} request
 * @param {FastifyReply<Http2SecureServer, Http2ServerRequest, Http2ServerResponse, RouteGenericInterface, unknown>} response
 */
/* c8 ignore start */
export function errorHandler (error, request, response) {
  const { statusCode = 500, validation } = error;
  const log = getLogger();

  request.log.error(error);

  if (statusCode >= 400 && statusCode < 500) {
    log.alert({
      error
    });
  } else if (statusCode >= 500) {
    log.critical({
      error
    });
  }

  for (const synonym in errorSynonyms) {
    generalErrors[`${synonym}`] = generalErrors[`${errorSynonyms[`${synonym}`]}`];
  }

  /** @type {ErrorDictionary} */
  const errors = {
    ...generalErrors,
    ...additionalErrors
  };

  if (validation) {
    return response
      .code(400)
      .send({
        success: false,
        statusCode: 400,
        code: 'request/malformed',
        error: 'request/malformed',
        message: validation[0].message
      });
  }

  return response
    .code(statusCode)
    .send({
      success: false,
      statusCode,
      error: errors[error.message] ? error.message : 'server/general-error',
      code: errors[error.message]?.code ? errors[error.message]?.code : 'server/general-error',
      message: errors[error.message]?.message || error.message
    });
}
/* c8 ignore end */
