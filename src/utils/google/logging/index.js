import { Logging } from '@google-cloud/logging';

/** @type {*} */
let log;

/** @type {*} */
let logging;

/**
* @returns {*}
*/
export function getLogger () {
  const {
    GOOGLE_PROJECT_ID,
    GOOGLE_LOGGING_PROJECT_ID,
    /* c8 ignore start */
    GOOGLE_LOG_NAME: logName = 'backend-log'
    /* c8 ignore end */
  } = process.env;

  /* c8 ignore start */
  if (!logging) {
    logging = new Logging({
      projectId: GOOGLE_LOGGING_PROJECT_ID || GOOGLE_PROJECT_ID
    });
  }
  /* c8 ignore end */

  if (!log) {
    log = logging.logSync(logName);
  }

  return {
    /* c8 ignore start */
    /**
     * @param {*} data
     * @param {*} meta
     */
    info: (data, meta = undefined) => (log.info(log.entry(meta, data))),

    /**
     * @param {*} data
     * @param {*} meta
     */
    alert: (data, meta = undefined) => (log.alert(log.entry(meta, data))),

    /**
     * @param {*} data
     * @param {*} meta
     */
    log: (data, meta = undefined) => (log.info(log.entry(meta, data))),

    /**
     * @param {*} data
     * @param {*} meta
     */
    emergency: (data, meta = undefined) => (log.emergency(log.entry(meta, data))),

    /**
     * @param {*} data
     * @param {*} meta
     */
    error: (data, meta = undefined) => (log.error(log.entry(meta, data))),

    /**
     * @param {*} data
     * @param {*} meta
     */
    notice: (data, meta = undefined) => (log.notice(log.entry(meta, data))),

    /**
     * @param {*} data
     * @param {*} meta
     */
    warning: (data, meta = undefined) => (log.warning(log.entry(meta, data))),

    /**
     * @param {*} data
     * @param {*} meta
     */
    critical: (data, meta = undefined) => (log.critical(log.entry(meta, data)))
    /* c8 ignore end */
  };
}

export function closeLogger () {
  if (log && log.transport) {
    log.transport.end();
  }
}
