import config from 'config';
import * as express from './express';
import * as mongoose from './mongoose';
import _ from 'lodash'
import logger from './logger';
import {Repository, Commit, Pull} from '../app/models'
import {Request,headers} from './authenticated';
import cron from 'node-cron';
import Responder from './expressResponder'
const async = require("async");
let query ={ }


const start = () => {
  const port = config.get('port');

  const appStartMessage = () => {
    const env = process.env.NODE_ENV;
    logger.debug(`API is Initialized`);
    logger.info(`App Name : ${config.app.title}`);
    logger.info(`Server Name : ${config.app.name}`);
    logger.info(`Environment  : ${env || 'development'}`);
    logger.info(`App Port : ${port}`);
    logger.info(`Process Id : ${process.pid}`);

  //   cron.schedule('35 * * * *', function() {
  //     let query;
  //     Repository.findAll({
  //        raw:true
  //      })
  //      .then(repositories => {
  //         async.eachSeries(repositories, function(repo,callback) {
  //             let repoId = repo.id;
  //             let dateTime;
  //             Commit.findOne({attrbute:['lastUpdatedAt'], where:{ repoId:repoId }}).then(time=> {dateTime=time ;
  //               console.log(dateTime)})
  //             if(dateTime)
  //               query = { since : dateTime }
  //             Request.get(`repos/${repo.gitId}/${repo.name}/commits`, query, headers)
  //             .then( body => {
  //               let response={};
  //               for(var j=0; j<body.length; j++) {
  //                 response[j] = {"message": body[j].commit.message ,"sha": body[j].sha, "lastUpdatedAt":body[0].commit.committer.date, "repoId": repoId};
  //                 Commit.upsert(response[j]);
  //               }
  //             })
  //             callback();
  //           },
  //           function(err) {
  //             console.log("error h....")
  //           })
  //       })
  //  })

  //   cron.schedule('55 * * * *', function() {
  //     let query;
  //     Repository.findAll({
  //        raw:true
  //      })
  //      .then(repositories => {
  //         async.eachSeries(repositories, function(repo,callback) {
  //             let repoId = repo.id;
  //             let dateTime;
  //             Pull.findOne({attrbute:['lastUpdatedAt'], where:{ repoId:repoId }}).then(time=> {dateTime=time ;
  //               console.log(dateTime)})
  //             if(dateTime)
  //               query = { since : dateTime }
  //             Request.get(`repos/${repo.gitId}/${repo.name}/pulls`,query, headers)
  //             .then( body => {
  //               let response={};
  //               for(var j=0; j<body.length; j++) {
  //                 response[j] = {"id": body[j].id ,"lastUpdatedAt":body[0].created_at, "repoId": body[j].head.repo.id};
  //                 Pull.upsert(response[j]);
  //               }
  //             })
  //             callback();
  //           },
  //           function(err) {
  //             console.log("error h....")
  //           })
  //       })
  //  })
 }

  mongoose.connect(() => {
    const app = express.init();
    app.listen(port, appStartMessage);
  });

};

export default start;
