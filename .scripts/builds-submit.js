import { readFileSync } from 'fs';
const {
  CI_COMMIT_BRANCH = 'main'
} = process.env;


try {
  console.log(`echo "${CI_COMMIT_BRANCH}"`);

  const config = JSON.parse(readFileSync(`config/${CI_COMMIT_BRANCH}/google.json`, 'utf8'));
  const { name, version } = JSON.parse(readFileSync('package.json', 'utf8'));

  if (!config.buildSource) {
    config.buildSource = `gs://${config.projectId}-builds-bucket/${name}`;
  }

  if (!config.buildLogs) {
    config.buildLogs = `gs://${config.projectId}-build-logs-bucket/${name}`;
  }


  if (!config.substitutions) {
    config.substitutions = {};
  }

  config.substitutions._TAG = name;
  config.substitutions._VERSION = `v${version}`;
  config.substitutions._GOOGLE_REPOSITORY_PROJECT = config.projectId;

  if (!config.substitutions._GOOGLE_REPOSITORY_DOMAIN) {
    config.substitutions._GOOGLE_REPOSITORY_DOMAIN = 'asia-southeast1-docker.pkg.dev';
  }

  if (!config.substitutions._GOOGLE_REPOSITORY_FOLDER) {
    config.substitutions._GOOGLE_REPOSITORY_FOLDER = 'builds';
  }

  const { projectId, buildSource, buildLogs, substitutions } = config;

  const sub = Object.entries(substitutions).map(([key, value]) => (`${key}=${value}`)).join(',');

  /** @type {*} */
  const gcloud = '~/google-cloud-sdk/bin/gcloud';

  const cmd = `${gcloud} builds submit \
  --config cloudbuild.yaml \
  --project ${projectId} \
  --gcs-source-staging-dir ${buildSource} \
  --gcs-log-dir ${buildLogs} \
  --substitutions ${sub}`;

  console.log(`echo "${cmd}"`);
  console.log(cmd);
} catch (error) {
  console.log(`echo "Error: ${error.message}"`);
  console.log('exit 1');

}
