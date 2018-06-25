const Sequelize = require('sequelize');
const sequelize = new Sequelize('apidb', 'postgres', 'test', {
  dialect: 'postgres',
  operatorsAliases: false 
});

const Projects = sequelize.define('project', {
    id : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING },
    duration: Sequelize.REAL,
    cost: Sequelize.REAL 
  })

sequelize.sync();
module.exports = Projects;
