const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize')

const Projects = sequelize.define('projects', {
  id : { 
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },
  name: Sequelize.STRING ,
  duration: Sequelize.REAL,
  cost: Sequelize.REAL},
  { timestamps : false }
)

module.exports = Projects;
