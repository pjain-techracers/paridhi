var Role = require('../models/role');

exports.createRole = (req,res) => {
  let { id, body, description } = req.body;
  Role.create({id:id, name:name, description:description})
  .then(() => {
    res.send("added new row");
  })
}

exports.getRole = (req,res) => {
  Role.findAll()
  .then(role => {
    res.send(role);
  })
}
