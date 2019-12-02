const Sequelize = require("sequelize");
const db = require("../db");

const Weather = db.define("weather", {
  category: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Weather;
