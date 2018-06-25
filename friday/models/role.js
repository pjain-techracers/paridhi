const Sequelize = require('sequelize');
const sequelize = new Sequelize('apidb', 'postgres', 'test', {
  dialect: 'postgres',
  operatorsAliases: false 
});

const Role = sequelize.define('role', {
    id : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false},
    description: Sequelize.STRING
  })
}
module.exports = Role;