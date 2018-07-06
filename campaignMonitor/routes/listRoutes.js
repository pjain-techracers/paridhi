const express = require('express');
ListController = require('../controller/list');

const initListRoutes = () => {
  const listRoutes = express.Router();
  listRoutes.get('/list/:id',ListController.getListById);
  return listRoutes;
}

module.exports = initListRoutes;
