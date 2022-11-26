const Sequelize = require("sequelize");
const sequelize = require("../Utils/database");

const Area = sequelize.define("Area", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  district: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  division: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  soil_type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lat: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  lng: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Area;
