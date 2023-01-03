const dotenv = require("dotenv");
const admin = require("firebase-admin");
const assert = require("assert");

dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} = process.env;

const serviceAccount = require("./dotakaset-a3880-firebase-adminsdk-iuuxn-c350541735.json");

assert(PORT, "Port is required");
assert(HOST, "Host is required");

module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  firebaseConfig: {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    credential: admin.credential.cert(serviceAccount),
  },
};
