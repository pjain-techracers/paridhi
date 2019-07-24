const Sequelize = require('sequelize');

const sequelize = new Sequelize('newrole', 'rails', 'postgres', {
    dialect: 'postgres',
    operatorsAliases: false
  });

 sequelize.sync().then(() => console.log("table created"),(err) => console.log(err));
 export default sequelize;
