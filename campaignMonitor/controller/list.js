const Request = require("request");
const header = require('../service/authenticate')
const baseURL = 'https://api.createsend.com/api/v3.2'

exports.getListById = (req, res) => {
  Request.get({
    "headers": header,
    "url": `${baseURL}/lists/${req.params.id}.json`
  },
  (error, response, body) => {
    if(error) 
      return console.dir(error);
    res.send(JSON.parse(body));
  });
}
