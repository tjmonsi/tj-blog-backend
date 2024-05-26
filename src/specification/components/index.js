import { responses } from './responses/index.js';
import { schemas } from './schemas/index.js';
import { securitySchemes } from './security-schemes/index.js';
import { requestBodies } from './request-bodies/index.js';
import { parameters } from './parameters/index.js';
import { headers } from './headers/index.js';
import { examples } from './examples/index.js';

export const components = {
  responses,
  securitySchemes,
  schemas,
  requestBodies,
  parameters,
  headers,
  examples
};
