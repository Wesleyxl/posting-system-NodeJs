const express = require("express");
require("./database");

const routes = require("./routes");

const server = express();
server.use(express.json());

server.use(routes);

server.listen(8000);
