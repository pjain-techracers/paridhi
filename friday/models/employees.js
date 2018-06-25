const Sequelize = require('sequelize');
const sequelize = new Sequelize('apidb', 'postgres', 'test', {
  dialect: 'postgres',
  operatorsAliases: false 
});

const Employees = sequelize.define('employees', {
    id: { 
      type: Sequelize.INTEGER, 
      primaryKey: true, 
      autoIncrement: true },
    name: {
      type: Sequelize.STRING,
     //allowNull: false,
    },
    salary: Sequelize.INTEGER
  })//.sync({ force: true })
//.create({  name: 'Foo',;
sequelize.sync();
module.exports = Employees;
//console.log(typeof employees);
