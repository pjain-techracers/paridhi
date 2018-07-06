const express = require('express');
ProjectController = require('../controller/projects');

const initprojectRoutes = () => {
  const projectRoutes = express.Router();
  projectRoutes.get('/projects', ProjectController.projectList);
  projectRoutes.post('/projects', ProjectController.createProject);
  projectRoutes.get('/projects/:id', ProjectController.getProjectById);
  projectRoutes.post('/projects/:id', ProjectController.assignProjectToEmp);
  return projectRoutes;
}

module.exports = initprojectRoutes;
