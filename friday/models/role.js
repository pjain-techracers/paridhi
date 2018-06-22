const Sequelize = require('sequelize');
module.exports.project = (sequelize, DataTypes) => {
  return role = sequelize.define('role', {
    id : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false},
    description: Sequelize.STRING
  })
}