verifyToken = (req,res,next) => {
  if (typeof req.headers.authorization !== 'string') {
    res.sendStatus(400);
    return;
  }
  var tokens = req.headers.authorization.split(' ');
  if (tokens.length < 2) {
    res.sendStatus(400);
    return;
  }
  var token = tokens[1];
  if(token == 'admin') {
    next();
  }
  else
    res.sendStatus(403);
}

module.exports = verifyToken;
