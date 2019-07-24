import initProjectRoutes from './projectRoutes';
import initPullRoutes from './pullRoutes';
import initCommitRoutes from './commitRoutes';
import initEmployeeRoutes from './employeeRoutes';
import initRepoRoutes from './repoRoutes';

const initRoutes = (app) => {

  app.use(`/`, initProjectRoutes());
  app.use(`/`, initPullRoutes());
  app.use(`/`, initCommitRoutes());
  app.use(`/`, initEmployeeRoutes());
  app.use(`/`, initRepoRoutes());
};

export default initRoutes;