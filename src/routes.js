const express = require("express");

const routes = express.Router();

// status routes
routes.get("/status", (req, res) => res.json("Running"));

module.exports = routes;
