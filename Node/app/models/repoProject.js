import Project from '../models/project';
const Sequelize = require('sequelize')
const Repository = require('./repo')
import sequelize from '../../lib/sequelize';

const RepoProject = sequelize.define('repoProject')

RepoProject.belongsTo(Repository ,{ as:'repo', foreignKey: { primaryKey: true }, onDelete: 'CASCADE' })
RepoProject.belongsTo(Project, { foreignKey: { primaryKey: true }, onDelete: 'CASCADE' })
RepoProject.removeAttribute('id');

module.exports = RepoProject

