import bodyParser from 'body-parser';
import request from './request';
const baseURL = 'https://api.github.com'
const username = 'pjain-techracers';
const password = 'techracers@123';

const headers = { 'User-Agent': 'pjain-techracers',
  'content-type': 'application/vnd.github.v3+json',
  "authorization" : "Basic " + new Buffer(username + ":" + password).toString("base64"),
}
const Request = new request(baseURL,headers);

export {Request,headers,username};
