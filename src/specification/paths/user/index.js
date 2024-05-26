import { commonErrors } from '../../../utils/open-api/common-errors.js';
import { responses, requestBodies, parameters } from '../../../utils/open-api/components.js';

export const user = {
  '/api/login': {
    post: {
      summary: 'Register as new user',
      description: 'register as new user.',
      operationId: 'registerUser',
      tags: [
        'Sample'
      ],
      requestBody: {
        $ref: `${requestBodies}/sampleRequest`
      },
      responses: {
        200: {
          $ref: `${responses}/sampleResponse`
        },
        ...commonErrors()
      },
      security: [
        {}
      ]
    }
  },
  '/sample/{sampleId}': {
    get: {
      summary: 'Get one Sample',
      description: 'Get on Sample ID',
      operationId: 'getOneSample',
      tags: [
        'Sample'
      ],
      parameters: [
        {
          $ref: `${parameters}/sampleId`
        }
      ],
      responses: {
        200: {
          $ref: `${responses}/sampleResponse`
        },
        ...commonErrors()
      },
      security: [
        {}
      ]
    }
  }
};
