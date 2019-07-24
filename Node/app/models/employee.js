import sequelize from '../../lib/sequelize';
import Sequelize from 'sequelize';

const Employee = sequelize.define('employees', {
  id: { 
    type: Sequelize.INTEGER, 
    primaryKey: true,
    autoIncrement: true
   },
  name: Sequelize.STRING,
  GitId: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  }
})

module.exports = Employee