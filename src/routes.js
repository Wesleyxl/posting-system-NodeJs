const express = require("express");

const routes = express.Router();

// controller
const UserController = require("./controller/UserController");
const PublicationController = require("./controller/PublicationController");

// status routes
routes.get("/status", (req, res) => res.json("Running"));

// users routes
routes.get("/users", UserController.index);
routes.post("/user", UserController.store);
routes.get("/user/:user_id", UserController.show);
routes.post("/user/:user_id/update", UserController.update);

// publications routes
routes.get("/publications", PublicationController.index);
routes.post("/publication", PublicationController.store);
routes.get("/publication/:publication_id", PublicationController.show);

module.exports = routes;
