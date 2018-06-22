var projects = require('../models/projects');
const Sequelize = require('sequelize');

exports.projectList = (req,res) => {
  projects.findAll().then(projects => {
    console.log(projects)
    //res.send(JSON.parse(body));
  // projects will be an array of all Project instances
  })
}

exports.getProjectById = (req,res) => {
  projects.findOne({ where: {id: req.params.id} }).then(projects => {
     console.log(projects)
     //res.send(JSON.parse(body));
  // project will be the first entry of the Projects table with the title 'aProject' || null
  })
}

/*exports.createProject = (req,res) => {
  let body = req.body;
  projects.findOrCreate(body)
    .then(() => {
     console.log(created)
    })
}*/

exports.createProject = (req,res) => {
projects.findOrCreate({name: 'sdepold', salary:500,duration :5})
  .spread((user, created) => {
    console.log(user.get({
      plain: true
    }))
    console.log(created)
})
}