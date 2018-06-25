var Request = require("request");
const bodyParser = require("body-parser");
const baseURL = 'https://api.createsend.com/api/v3.2'
var username='fade1a8869cb7f7a1f79cfe74ba78217'
var password ='techracers@123'
var header = { "content-type": "application/json",
                 "authorization" : "Basic " + new Buffer(username + ":" + password).toString("base64")}

/*router.use(bodyParser.urlencoded({
    extended: true
}));*/
module.exports.getClient = function(req, res) {
    Request.get({
      "headers": header,
      "url": baseURL + "/clients.json",
    },
    (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        res.send(JSON.parse(body));
    });
};

module.exports.createClient=  function(req, res) {
      Request.post({
      "headers": header,
      "url": baseURL +"/clients.json",
      "json":req.body
    },(error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        res.send(JSON.parse(body));
      });
};

module.exports.getClientById= function(req, res) {
  Request.get({
    "headers": header,
    "url": baseURL +"/clients/" + req.params.id +".json"
  },(error, response, body) => {
      if(error) {
          return console.dir(error);
      }
      res.send(JSON.parse(body));
    });
};

module.exports.deleteClientById= function(req, res) {
    Request.delete({
      "headers": header,
      "url": baseURL +"/clients/"+ req.params.id + ".json"
    },(error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        res.send(JSON.parse(body));
      });
};
