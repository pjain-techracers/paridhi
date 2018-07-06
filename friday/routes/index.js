const initProjectRoutes = require('./projectRoutes');
const initEmployeeRoutes = require('./employeeRoutes');
const initRoleRoutes = require('./roleRoutes');

const initRoutes = (app) => {
  app.use(`/`, initProjectRoutes());
  app.use(`/`, initEmployeeRoutes());
  app.use(`/`, initRoleRoutes());
}

module.exports = initRoutes;
