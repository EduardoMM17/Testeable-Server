const userRoutes = require("./src/user/routes");
const bodyParser = require("body-parser");
const express = require("express");

function createServer() {
  const server = express();
  server.use(bodyParser.json());
  server.use("/user", userRoutes);
  return server;
}

module.exports = createServer;
