const express = require('express');
const app = express();

projectController = require('./controller/projects');
employeeController = require('./controller/employees');
app.get('/employees/list', employeeController.employeeList);
app.post('/employees/create', employeeController.createEmployee);
app.get('/employees/:id', employeeController.getEmployeeById);

app.get('/projects/:id', projectController.getProjectById);
app.get('/projects/list', projectController.projectList);
app.post('/projects', projectController.createProject);
app.get('/projects/:id', projectController.getProjectById);


module.exports = app;

