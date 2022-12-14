const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  platform: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  image: {
    type: Sequelize.TEXT,
    defaultValue: "./images/Game_placeholder.png",
  },

  esrb: {
    type: Sequelize.STRING,
    defaultValue: "Not rated",
  },
  rating: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "Not yet rated",
  },
  multiplayer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;
