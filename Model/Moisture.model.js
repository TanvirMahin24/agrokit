const Sequelize = require("sequelize");
const sequelize = require("../Utils/database");

const Moisture = sequelize.define("Moisture", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  moisture: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Moisture;
