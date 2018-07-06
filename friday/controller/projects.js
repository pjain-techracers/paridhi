const Projects = require('../models/projects');
const ProRoleEmp = require('../models/proRoleEmp');
const Sequelize = require('sequelize');

exports.projectList = (req,res) => {
  let { page_size, page } = req.query
  Projects.findAll({
    limit: page_size,
    offset: (page-1)*(page_size)
  }).then(projects => {
    res.send(projects);
  })
}

exports.assignProjectToEmp = (req,res) => {
  let { projectId,empId} = req.params;
  let { roleId }= req.body;
  ProRoleEmp.create({
    projectId: id,
    empId: empId, 
    roleId: roleId
  })
  .then(() => {
    res.send("new mapping created")
  })
  .catch(()=>{
    res.send("error while inserting your data")
  })
}


exports.getProjectById = (req,res) => {
  ProRoleEmp.findAll({
    attributes:['projectId','empId'],
    where:{ projectId: req.params.id},
    include:[ {all:true}]
  })
  .then(proRoleEmp => {
    res.send(proRoleEmp);
  })
}

exports.createProject = (req,res) => {
  let {id, name, duration, cost} = req.body;
  Projects.create({id:id, name:name, duration:duration, cost:cost})
  .then(() => {
    res.send("added new row");
  })
  .catch(()=> {
    res.send("error while inserting data  in project")
  })
}
