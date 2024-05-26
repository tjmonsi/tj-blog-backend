import { build } from './src/app.js';

const IS_GOOGLE_CLOUD_RUN = process.env.K_SERVICE !== undefined;
const port = parseInt(process.env.PORT || '8080');
const host = IS_GOOGLE_CLOUD_RUN ? '0.0.0.0' : undefined;

try {
  const server = await build();
  const addr = await server.listen({ port, host });
  console.log(`Listening on ${addr} - (${host}) at port: ${port}`);
} catch (err) {
  console.error(err);
  process.exit(1);
}

