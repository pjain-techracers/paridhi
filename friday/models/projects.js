module.exports.project = (sequelize, DataTypes) => {
  return  sequelize.define('project', {
    id : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false},
    duration: Sequelize.REAL,
    cost: Sequelize.REAL 
  })
}
