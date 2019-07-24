import Project from '../models/project';
const Sequelize = require('sequelize')
const Employee = require('../models/employee')
import sequelize from '../../lib/sequelize';

const EmpProject = sequelize.define('empProject')

EmpProject.belongsTo(Employee, { as : 'emp', foreignKey: { primaryKey: true }, onDelete: 'CASCADE' })
EmpProject.belongsTo(Project, { foreignKey: { primaryKey: true }, onDelete: 'CASCADE' })
EmpProject.removeAttribute('id');

module.exports = EmpProject