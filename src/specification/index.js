import { readFileSync } from 'fs';
import { tags } from './tags/index.js';
import { paths } from './paths/index.js';
import { externalDocs } from './external-docs/index.js';
import { components } from './components/index.js';
import { security } from './security/index.js';

const {
  name: title,
  description,
  version,
  license
} = JSON.parse(readFileSync('package.json', 'utf8'));

export const specification = {
  openapi: '3.1.0',
  info: {
    description,
    version,
    title,
    license: {
      name: license,
      url: `https://spdx.org/licenses/${license}.html`
    }
  },
  tags,
  paths,
  externalDocs,
  components,
  security
};
