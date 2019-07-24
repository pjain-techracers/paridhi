import Responder from '../../lib/expressResponder';
import Express from '../../lib/express';
import {Request, headers} from '../../lib/authenticated';
import { Pull, Repository } from '../models'
const query = {}

export default class PullreqController {

 static listPR(req, res) {
  let { owner, repo }  = req.params
  var repoId;
  Repository.findOne({
      attribute:['gitId'],
      where: {gitId: owner, name:repo}
    })
    .then(repository => {
      repoId = repository.dataValues.id;
      })
    .then(find => {
      Pull.findAll({
        where: {repoId: repoId},
      })
    .then(pulls=> {
      if(pulls.length) {
        console.log('++++++++++++++++++++++++++++++++++++++++++++++');
        Responder.success(res, pulls)
      }            
      else {
        Request.get(`repos/${owner}/${repo}/pulls`, query, headers)
         .then( body => {
          let response ={};
          for(var index=0; index < body.length; index++)
            {
              response[index] = {'id': body[index].id , "lastUpdatedAt":body[0].created_at, 'repoId': body[index].head.repo.id};
              Pull.create(response[index]);
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
