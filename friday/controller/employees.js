var employees= require('../models/employees/employees');


exports.employeeList = (req,res) => {
  employees.findAll().then(employees => {
  	console.log(employees)
    //res.send(JSON.parse(body))
  })
}

exports.createEmployee = (req,res) => {
  let body = req.body;
  employees.create(body)
    .then(() => {
    	console.log(employees);
     console.log('created')
    })
}

exports.getEmployeeById = (req,res) => {
 employees.findOne({ where: {id: req.params.id} }).then(employees=> {
     res.send(JSON.parse(body));
  // project will be the first entry of the Projects table with the title 'aProject' || null
  })
}

