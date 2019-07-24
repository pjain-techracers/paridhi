import express from 'express';
import ProjectController from '../controllers/projectController';

const initProjectRoutes = () => {
  const projectRoutes = express.Router();
  projectRoutes.get('/projects', ProjectController.projectList);
  projectRoutes.get('/projects/repos/:projectId', ProjectController.listRepoWithProjectId);
  projectRoutes.get('/projects/emp/:projectId', ProjectController.listEmployeesWithProjectId);
  projectRoutes.post('/repos/:repoId/projects/:projectId', ProjectController.mapProjectRepo);
  projectRoutes.post('/employees/:empId/projects/:projectId', ProjectController.mapProjectEmployee);
  projectRoutes.delete('/projects/:projectId', ProjectController.deleteProject);
  projectRoutes.post('/projects', ProjectController.createProject);
  return projectRoutes;
};

export default initProjectRoutes;
