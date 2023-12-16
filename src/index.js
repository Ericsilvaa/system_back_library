require("dotenv").config();
const express = require("express");
const routes = require("./routes/index.js");

const app = express();
const port = process.env.NODE_ENV_PORT || 8080;

routes(app);

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
