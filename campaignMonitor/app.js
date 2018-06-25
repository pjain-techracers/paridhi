const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const clientController = require('./controller/clients.js')
const listController = require('./controller/list.js')
console.log(clientController.getClient);
app.get('/clients',clientController.getClient);
app.post('/clients',clientController.createClient);
app.get('/clients/:id',clientController.getClientById);
app.delete('/clients/:id',clientController.deleteClientById);
app.get('/list/:id',listController.getListById);


//var routes = require("./routes/routes.js")(app);
let server = app.listen(3000, function () {
   console.log("Listening on port %s...", server.address().port);
});
 module.exports = app;