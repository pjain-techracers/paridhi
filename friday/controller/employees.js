var employees = require('../models/employees');

exports.employeeList = (req,res) => {
  let { page_size, page } = req.query;
  employees.findAll({
    limit: page_size,
    offset: (page-1)*(page_size)
  })
  .then(employees => {
    res.send(employees);
  })
  .catch(() => console.log("error in displaying"));
}

exports.createEmployee = (req,res) => {
  let { id, name, salary } = req.body
  employees.create({id:id, name: name, salary: salary})
  .then(() => {
    res.json(" rows created");
  })
}

exports.getEmployeeById = (req,res) => {
  employees.findOne({ where: {id: req.params.id} })
 .then(employees => {
    res.send(employees);
  })
}
