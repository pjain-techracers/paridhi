const http = require('http');
const initRoutes =require('./routes');
var bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
initRoutes(app);
const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port);
console.log("Listening on port %s...", server.address().port);
