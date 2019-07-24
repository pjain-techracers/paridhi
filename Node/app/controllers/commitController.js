import Responder from '../../lib/expressResponder';
import Express from '../../lib/express';
import {Request,headers} from '../../lib/authenticated';
import { Commit, Repository } from '../models'
const query = { };

export default class CommitController {

  static commitList(req, res) {
    let owner = req.params.gitId 
    let repo = req.params.repo
    var repoId;
    Repository.findOne({
      attribute:['gitId'],
      where: {gitId: owner, name:repo}
    })
    .then(repository => {
      repoId = repository.dataValues.id;
      })
    .then(find => {
      Commit.findAll({
        where: {repoId: repoId},
      })
      .then(commits => {
          if(commits.length) {
          Responder.success(res, commits)
          }            
          else {
            Request.get(`repos/${owner}/${repo}/commits`, query, headers)
           .then( body => {
              var response={};
              for(let index=0; index<body.length; index++)
                {
                  response[index] = {"message": body[index].commit.message ,"sha": body[index].sha, "lastUpdatedAt":body[0].commit.committer.date, "repoId":repoId};
                  Commit.create(response[index]);
                }
                res.send(response)
           })
           .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp)); 
         }
      })
    .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp)); 
  })
 }
}
