const express = require('express');
RoleController = require('../controller/role');

const initRoleRoutes =() => {
  const roleRoutes = express.Router();
  roleRoutes.post('/role', RoleController.createRole);
  roleRoutes.get('/role', RoleController.getRole);
  return roleRoutes;
}

module.exports = initRoleRoutes;
