const functions = require("firebase-functions");
require("dotenv").config();

// Routers
const userRouter = require("./routes/api/users.route.js");

const app = require("express")();
const cors = require('cors')({origin: true});

app.use(cors);

app.use("/users", userRouter);

// http://localhost:5000/dotakaset-a3880/us-central1/api/
exports.api = functions.https.onRequest(app);


// firebase serve starts the production mode
// firebase deploy deploys the endpoints to firebase