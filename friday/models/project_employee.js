module.exports.project_employee = (sequelize, DataTypes) => {
  var project_employee = sequelize.define('project_employee', 
    project_id : { 
      type: Sequelize.INTEGER ,
       references: {
        model: project,
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    emp_id: { 
      type: Sequelize.INTEGER 
      references: {
        model: employee,
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    role_id: {
      type: Sequelize.INTEGER 
      references: {
        model: role,
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
  })
  return project_employee;
}

