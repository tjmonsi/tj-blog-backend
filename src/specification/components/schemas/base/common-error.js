import { schemas } from '../../../../utils/open-api/components.js';

export const commonError = {
  type: 'object',
  description: 'Error response object',
  properties: {
    success: {
      $ref: `${schemas}/success`
    },
    statusCode: {
      type: 'number'
    },
    error: {
      type: 'string'
    },
    code: {
      type: 'string'
    },
    message: {
      type: 'string'
    }
  }
};
