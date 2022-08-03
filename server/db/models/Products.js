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
    type: Sequelize.DECIMAL,
    validate: {
      max: 100.0,
      min: 0.0,
    },
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
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      max: 100,
      min: 0,
    },
  },
  multiplayer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;
