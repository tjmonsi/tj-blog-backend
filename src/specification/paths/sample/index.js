import { commonErrors } from '../../../utils/open-api/common-errors.js';
import { responses, requestBodies, parameters } from '../../../utils/open-api/components.js';

export const sample = {
  '/sample': {
    post: {
      summary: 'Create Sample',
      description: 'Some sample API.',
      operationId: 'sample',
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
