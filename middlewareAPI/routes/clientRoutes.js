const express = require('express');
const verifyToken = require('../services/jwt');
ClientController = require('../controller/clients');

const initClientRoutes = () => {
  const clientRoutes = express.Router();
  clientRoutes.get('/clients', ClientController.getClient);
  clientRoutes.post('/clients', verifyToken, ClientController.createClient);
  clientRoutes.get('/clients/:id', ClientController.getClientById);
  clientRoutes.delete('/clients/:id', verifyToken, ClientController.deleteClientById);
  return clientRoutes;
}

module.exports = initClientRoutes;
