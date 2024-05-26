import '../helpers/load-env.js';

/**
 * @returns {*}
 */
export function getCorsOptions () {
  const {
    CORS_ORIGIN = '*'
  } = process.env;
  return {
    /* c8 ignore start */
    // change this if we want to use a database to load origin
    origin: CORS_ORIGIN === '*' || CORS_ORIGIN.indexOf(',') < 0
      ? CORS_ORIGIN
      : CORS_ORIGIN?.split(',')
        .map(/** @param {string} origin **/(origin) => origin.trim()),
    /* c8 ignore end */
    preflightContinue: true,
    optionsSuccessStatus: 200
  };
}
