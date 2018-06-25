var employees = require('../models/employees');

console.log( typeof employees);

exports.employeeList = (req,res) => {
  employees.findAll().then(employees => {
  	console.log(employees)
    res.send(employees);
    //res.send(JSON.parse(body))
  })
}

exports.createEmployee = (req,res) => {
  employees.create({id:req.body.id, name:req.body.name, salary:req.body.salary})
    .then(() => {
    	console.log("created");
      res.send({id:req.body.id, name:req.body.name, salary:req.body.salary});
    })
}

exports.getEmployeeById = (req,res) => {
 employees.findOne({ where: {id: req.params.id} }).then(employees=> {
     res.send(employees);
  // project will be the first entry of the Projects table with the title 'aProject' || null
  })
}

