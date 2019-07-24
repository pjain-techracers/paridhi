import express from 'express';
import EmployeeController from '../controllers/employeeController';

const initEmployeeRoutes = () => {

  const employeeRoutes = express.Router();
  employeeRoutes.get('/employees', EmployeeController.employeeList);
  employeeRoutes.get('/employees/:id', EmployeeController.getEmployeeDetails);
  employeeRoutes.post('/employees', EmployeeController.createEmployee);
  employeeRoutes.delete('/employees/:empId', EmployeeController.deleteEmployee);
  employeeRoutes.get('/customize', EmployeeController.customizeCard);

  return employeeRoutes;
}
export default initEmployeeRoutes;
