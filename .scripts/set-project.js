import { readFileSync } from 'fs';

const {
  CI_COMMIT_BRANCH = 'main'
} = process.env;

try {
  console.log(`echo "${CI_COMMIT_BRANCH}"`);

  const { projectId } = JSON.parse(readFileSync(`config/${CI_COMMIT_BRANCH}/google.json`, 'utf8'));
  const gcloud = '~/google-cloud-sdk/bin/gcloud';

  if (!projectId) {
    throw new Error('No project id');
  }

  console.log(`${gcloud} config set project ${projectId}`);
} catch (error) {
  console.log(`echo "Error: ${error.message}"`);
  console.log('exit 1');
}
