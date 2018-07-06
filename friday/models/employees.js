const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize')

const Employees = sequelize.define('employees', {
  id: { 
    type: Sequelize.INTEGER, 
    primaryKey: true, 
    autoIncrement: true },
  name: Sequelize.STRING,
  salary: Sequelize.INTEGER},
  { timestamps: false }
)

module.exports = Employees;
