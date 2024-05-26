import { commonErrors } from '../../../utils/open-api/common-errors.js';
import { responses } from '../../../utils/open-api/components.js';

export const home = {
  '/': {
    get: {
      summary: 'Home',
      description: 'Some home description',
      operationId: 'home',
      tags: [
        'General'
      ],
      responses: {
        200: {
          $ref: `${responses}/successfulResponse`
        },
        ...commonErrors()
      },
      security: [
        {}
      ]
    }
  }
};
