const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
projectController = require('./controller/projects');
employeeController = require('./controller/employees');
app.get('/employees', employeeController.employeeList);
app.post('/employees', employeeController.createEmployee);
app.get('/employees/:id', employeeController.getEmployeeById);

app.get('/projects/:id', projectController.getProjectById);
app.get('/projects', projectController.projectList);
app.post('/projects', projectController.createProject);
app.get('/projects/:id', projectController.getProjectById);


module.exports = app;

