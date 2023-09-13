const admin = require("firebase-admin");
const serviceAccount = require("../../config/pintado-database-firebase-adminsdk-c8gqc-3439e685b6.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();
const auth = admin.auth();


module.exports = { db , auth }
