let username='fade1a8869cb7f7a1f79cfe74ba78217'
let password ='techracers@123'
let header = { "content-type": "application/json",
	"authorization" : "Basic " + new Buffer(username + ":" + password).toString("base64")}

module.exports = header
