const express = require('express');
ClientController = require('../controller/clients');

const initClientRoutes = () => {
  const clientRoutes = express.Router();
  clientRoutes.get('/clients', ClientController.getClient);
  clientRoutes.post('/clients', ClientController.createClient);
  clientRoutes.get('/clients/:id', ClientController.getClientById);
  clientRoutes.delete('/clients/:id', ClientController.deleteClientById);
  return clientRoutes;
}

module.exports = initClientRoutes;
