export const sample = {
  type: 'object',
  properties: {
    id: {
      $ref: '#/components/schemas/sampleId'
    },
    text: {
      $ref: '#/components/schemas/sampleText'
    }
  }
};
