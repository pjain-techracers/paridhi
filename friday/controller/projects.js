const project = require('../models/project');
const Sequelize = require('sequelize');

exports.projectList = (req,res) => {
  project.findAll().then(projects => {
   // console.log(projects)
    res.send(projects);
  })
}

exports.getProjectById = (req,res) => {
  project.findOne({ where: {id: req.params.id} }).then(projects => {
     console.log(projects)
     res.send(projects);
     //res.send(JSON.parse(body));
  // project will be the first entry of the Projects table with the title 'aProject' || null
  })
}

exports.createProject = (req,res) => {
  project.create({id:req.body.id, name:req.body.name, duration:req.body.duration, cost:req.body.cost})
    .then(() => {
     console.log("created")
    })
}
