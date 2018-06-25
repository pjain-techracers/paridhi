const express = require('express');
const router = express.Router()
const baseURL = 'https://api.createsend.com/api/v3.2'
var username='fade1a8869cb7f7a1f79cfe74ba78217'
var password ='techracers@123'
var header = { "content-type": "application/json",
                 "authorization" : "Basic " + new Buffer(username + ":" + password).toString("base64")}

module.exports.getListById= function(req, res) {
    Request.get({
      "headers": header,
      "url": baseURL +"/lists/"+ req.params.id+ ".json"
    },(error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.dir(JSON.parse(body));
        res.send(JSON.parse(body));
      });
};
