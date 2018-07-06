const initRoutes =require('./routes');
var bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
initRoutes(app);

let server = app.listen(3000, function () {
   console.log("Listening on port %s...", server.address().port);
});
