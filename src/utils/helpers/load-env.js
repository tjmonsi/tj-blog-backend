import * as dotenv from 'dotenv';

// load dotenv
const result = dotenv.config({
  path: process.env.ENV_PATH || 'secret/.env'
});

/* c8 ignore start */
if (result.error) {
  console.error('Please copy env into .env to start working');
  throw result.error;
}
/* c8 ignore end */
