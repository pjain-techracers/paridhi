const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize')
const Projects = require('./projects');
const Role = require('./role');
const Employees = require('./employees');

const ProRoleEmp = sequelize.define('proRoleEmp',{},{timestamps: false})
ProRoleEmp.belongsTo(Projects, { foreignKey: { primaryKey: true }, onDelete: 'CASCADE' });
ProRoleEmp.belongsTo(Role, { as :'role', foreignKey: { primaryKey: true }, onDelete: 'CASCADE' });
ProRoleEmp.belongsTo(Employees, { as:'emp', foreignKey: { primaryKey: true }, onDelete: 'CASCADE' });
ProRoleEmp.removeAttribute('id');

module.exports = ProRoleEmp;
