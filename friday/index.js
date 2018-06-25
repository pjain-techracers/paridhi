const http = require('http');
const app = require('./routes');
const sequelize = require('sequelize');
const server = http.createServer(app);
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 3000;




/*sequelize.sync({}).then(() => {
  app.listen(3000);
})*/
server.listen(port);
 console.log("Listening on port %s...", server.address().port);
