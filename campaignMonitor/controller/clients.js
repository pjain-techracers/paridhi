const Request = require("request");
const header = require('../service/authenticate')
const baseURL = 'https://api.createsend.com/api/v3.2'


exports.getClient = (req, res) => {
  Request.get({
    "headers": header,
    "url": `${baseURL}/clients.json`
  },
  (error, response, body) => {
    if(error) 
      return console.dir(error);
    res.send(JSON.parse(body));
  });
};

exports.createClient = (req, res) => {
  Request.post({
    "headers": header,
    "url": `${baseURL}/clients.json`
    "json": req.body
  },
  (error, response, body) => {
    if(error)
      return console.dir(error);
    res.send(JSON.parse(body));
  });
};

exports.getClientById = (req, res) => {
  Request.get({
    "headers": header,
    "url": `${baseURL}"/clients/${req.params.id}.json`
  },
  (error, response, body) => {
    if(error) 
      return console.dir(error);
    res.send(JSON.parse(body));
  });
};

exports.deleteClientById = (req, res) => {
  Request.delete({
    "headers": header,
    "url": `${baseURL}/clients/${req.params.id}.json`
  },
  (error, response, body) => {
    if(error) 
      return console.dir(error);
    res.send(JSON.parse(body));
  });
};
