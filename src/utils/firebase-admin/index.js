import { initializeApp, applicationDefault } from 'firebase-admin/app';

const {
  GOOGLE_PROJECT_ID,
  GOOGLE_FIREBASE_ADMIN_PROJECT_ID
} = process.env;

export const app = initializeApp({
  /* c8 ignore start */
  projectId: GOOGLE_FIREBASE_ADMIN_PROJECT_ID || GOOGLE_PROJECT_ID,
  /* c8 ignore end */
  credential: applicationDefault()
});
