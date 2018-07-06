const initClientRoutes = require('./clientRoutes');
const initListRoutes = require('./listRoutes');

const initRoutes = (app) => {
  app.use(`/`, initClientRoutes());
  app.use(`/`, initListRoutes());
}

module.exports = initRoutes;
