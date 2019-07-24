import sequelize from '../../lib/sequelize';
import Sequelize from 'sequelize';
import Repository from './repo';

const Commit = sequelize.define('commits', {
  sha: {
    type: Sequelize.STRING, 
    primaryKey: true 
  },
  message: Sequelize.TEXT,
  lastUpdatedAt: Sequelize.DATE
},
  {
    timestamps:false
  }
)

Commit.belongsTo(Repository, { foreignKey:'repoId' })

module.exports = Commit;
