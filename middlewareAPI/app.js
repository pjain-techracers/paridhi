const express = require("express");
const http = require("http");
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var routes = require("./routes/routes.js")(app);
var server = app.listen(3000, function () {
   console.log("Listening on port %s...", server.address().port);
});