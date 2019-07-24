import sequelize from '../../lib/sequelize';
import Sequelize from 'sequelize';
import Employee from './employee'

const Repository = sequelize.define('repository', {
  id: { 
    type: Sequelize.INTEGER, 
    primaryKey: true 
   },
  name: Sequelize.STRING,
  gitId: Sequelize.STRING
})

Repository.belongsTo(Employee, {foreignKey:'gitId', targetKey: 'GitId', onDelete: 'CASCADE' })

module.exports = Repository