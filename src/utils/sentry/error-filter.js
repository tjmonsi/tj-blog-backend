/**
 * This filters the error to check if it should send the error to Sentry or not
 *
 * @param {*} error
 * @returns {boolean}
 */
export const errorFilter = (error) => {
  const { statusCode } = error;

  /* c8 ignore start */
  // change this to add more statusCodes that needed to be reported
  return statusCode >= 500 ||
    statusCode === 403 ||
    statusCode === 405 ||
    statusCode === 408 ||
    statusCode === 411 ||
    (statusCode >= 413 && statusCode < 417) ||
    (statusCode > 418) ||
    !statusCode;
  /* c8 ignore end */
};
