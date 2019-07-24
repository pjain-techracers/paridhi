import sequelize from '../../lib/sequelize';
import Sequelize from 'sequelize';
import Repository from './repo';


const Pull = sequelize.define('pulls', {
  id: { 
    type: Sequelize.STRING, 
    primaryKey: true 
  },
  lastUpdatedAt: Sequelize.DATE
},
  {
    timestamps:false
  }
)

Pull.belongsTo(Repository,{ foreignKey : 'repoId' })

module.exports = Pull
