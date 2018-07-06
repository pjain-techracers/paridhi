const express = require('express');
EmployeeController = require('../controller/employees');

const initEmployeeRoutes =() => {
  const employeeRoutes = express.Router();
  employeeRoutes.get('/employees', EmployeeController.employeeList);
  employeeRoutes.post('/employees', EmployeeController.createEmployee);
  employeeRoutes.get('/employees/:id', EmployeeController.getEmployeeById);
  return employeeRoutes;
}

module.exports = initEmployeeRoutes;
