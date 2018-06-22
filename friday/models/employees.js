const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Employee = sequelize.define('employee', {
    id: { 
      type: Sequelize.INTEGER, 
      primaryKey: true, 
      autoIncrement: true },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salary: Sequelize.INTEGER
  });
};
