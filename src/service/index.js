import { home } from './modules/general/home.js';

export class Service {
  /**
   *
   * @param {FastifyInstance<Http2SecureServer, Http2ServerRequest, Http2ServerResponse, FastifyLoggerInstance>} app
   */
  constructor (app) {
    this.app = app;
  }

  home = home.bind(this);
}
