const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const connection = new Sequelize(dbConfig);

// import models
const User = require("../model/User");
const Publication = require("../model/Publication");
const Comment = require("../model/Comments");

// init models
User.init(connection);
Publication.init(connection);
Comment.init(connection);

// models associations
User.associate(connection.models);
Publication.associate(connection.models);
// Comment.associate(connection.models);

module.exports = connection;
