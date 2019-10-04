const Sequelize = require("sequelize");
require ('dotenv').config()

const sequelize = new Sequelize({
  host: "localhost",
  dialect: "mysql",
  database: process.env.DATABASE,
  username: process.env.USERNAME,
  password: process.env.PASSWORD
});

module.exports = sequelize