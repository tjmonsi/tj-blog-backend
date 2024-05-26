import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import { errorHandler } from '../helpers/error-handler.js';
import { errorFilter } from './error-filter.js';

/**
 * @returns {*}
 */

/* c8 ignore start */
export function getSentryOptions () {
  const {
    SENTRY_DSN: dsn,
    NODE_ENV: environment = 'development'
  } = process.env;

  return {
    dsn,
    environment,
    tracing: true,
    errorHandler,
    errorFilter,
    integrations: [
      // enable HTTP calls tracing
      new Sentry.Integrations.Http({
        breadcrumbs: true,
        tracing: true
      }),
      new Sentry.Integrations.Console(),
      new Sentry.Integrations.OnUncaughtException(),
      new Sentry.Integrations.OnUnhandledRejection(),
      new Sentry.Integrations.FunctionToString()

      // Add additional integrations when needed
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: parseFloat(process.env.SENTRY_SAMPLE_RATE || '1.0')
  };
}
/* c8 ignore end */

export {
  Sentry,
  Tracing
};
