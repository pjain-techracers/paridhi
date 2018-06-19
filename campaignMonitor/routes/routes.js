var appRouter = function(app) {
  var Request = require("request");
  var username='fade1a8869cb7f7a1f79cfe74ba78217'
  var password ='techracers@123'
  var header = { "content-type": "application/json",
                 "authorization" : "Basic " + new Buffer(username + ":" + password).toString("base64")}

  app.get("/getClients", function(req, res) {
    Request.get({
      "headers": header,
      "url": "https://api.createsend.com/api/v3.2/clients.json",
    },(error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        res.send(JSON.parse(body));
      });
  });

  app.post("/createClient", function(req, res) {
      Request.post({
      "headers": header,
      "url": "https://api.createsend.com/api/v3.2/clients.json",
      "body": JSON.stringify({
        "CompanyName": "techracers",
        "Country": "India",
        "TimeZone": "(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi"
      })
    },(error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.dir(JSON.parse(body));
        res.send(JSON.parse(body));
      });
  });

  app.get("/clientInfo", function(req, res) {
    Request.get({
      "headers": header,
      "url": "https://api.createsend.com/api/v3.2/clients/bb457fd39d93008f033a63665e42d138.json"
    },(error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.dir(JSON.parse(body));
        res.send(JSON.parse(body));
      });
  });

  app.delete("/deleteClient", function(req, res) {
    Request.delete({
      "headers": header,
      "url": "https://api.createsend.com/api/v3.2/clients/bb457fd39d93008f033a63665e42d138.json"
    },(error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.dir(JSON.parse(body));
        res.send(JSON.parse(body));
      });
  });

  app.get("/listForClient", function(req, res) {
    Request.get({
      "headers": header,
      "url": "https://api.createsend.com/api/v3.2/lists/{listid}.json}"
    },(error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.dir(JSON.parse(body));
        res.send(JSON.parse(body));
      });
  });
}

module.exports = appRouter;

