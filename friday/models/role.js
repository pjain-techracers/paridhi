const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize')

const Role = sequelize.define('role', {
  id : { 
    type: Sequelize.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  name: Sequelize.STRING,
  description: Sequelize.TEXT},
  { timestamps : false }
)

module.exports = Role;
