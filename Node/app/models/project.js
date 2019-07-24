const Sequelize = require('sequelize')
import sequelize from '../../lib/sequelize';

const Project = sequelize.define('projects', {
    id: { 
      type: Sequelize.INTEGER, 
      primaryKey: true,
      autoIncrement : true
     },
    name: {
      type: Sequelize.STRING
    }
})

module.exports = Project