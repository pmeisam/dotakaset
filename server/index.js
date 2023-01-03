const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config.js");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api/user/", userRoutes.routes);

const PORT = config.port || 8080;
app.listen(PORT, () =>
  console.log("App is listening on url http://localhost:" + PORT)
);