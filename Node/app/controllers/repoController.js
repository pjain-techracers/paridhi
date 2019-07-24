import Responder from '../../lib/expressResponder';
import Express from '../../lib/express';
import {Request, headers, username} from '../../lib/authenticated';
import { Repository, Employee } from '../models'
const query = {}


export default class RepoController {
  static createRepository(req, res) {
    console.log('===============================================================');
    Employee.findAll({ where : {GitId: 'pjain-techracers'}})
     .then(employeeExists => { 
        if(employeeExists.length) {
          Request.post(`user/repos`,req.body, query, headers)
           .then(body => {
              let response = {"name": body.name ,"id": body.id, "gitId":username};
              Repository.create(response)
               .then(repoResponse => Responder.created(res, repoResponse))
               .catch(errorOnDBOp=> Responder.operationFailed(res, errorOnDBOp));
            })
           .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp));
        } 
        else {
          Responder.operationFailed(res, "not an employee of company");
        }
      })
     .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp));     
  }
      
  static deleteRepos(req, res) {
    let { owner, repo } = req.params
     Request.delete(`repos/${owner}/${repo}`, query, headers)
      .then(() => { 
        Repository.destroy({where: {"name": repo , "gitId":username}})
        .then(() => Responder.deleted(res))
        .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp));
      })
      .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp)); 
  }


  static listRepositories(req, res) {
    Employee.findAll({where: {GitId: 'pjain-techracers'}})
    .then(employeeExists => {
      if(employeeExists.length) {
        Repository.findAll( { where: {gitId: 'pjain-techracers'}})
         .then(repository => {
            if(repository.length) {
              Responder.success(res, repository)
            }            
            else {
              Request.get(`user/repos`, query, headers)
               .then( body => {
                  let response={};
                  for(var index=0; index<body.length; index++) {
                    response[index] = {"name": body[index].name ,"id": body[index].id, "gitId":'pjain-techracers'};
                    Repository.create(response[index]);
                  }
                  res.send(response)
                })
               .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp)); 
            }
          })
         .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp));
      }
      else {
        Responder.operationFailed(res , "not an employee of company")
      }
    })
    .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp)); 
  }


    static otherUserRepos(req, res) {
      console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
      let user = req.params.gitId;
      Repository.findAll({ where: {gitId: user} })
       .then(repository => {
          if(repository.length) {
            Responder.success(res, repository)
          }            
          else {
            Employee.findAll({ where: {GitId: user}})
             .then( employeeExists => { 
                if(employeeExists.length) {
                  Request.get(`users/${user}/repos`, query , headers)
                   .then( body => {               
                      let response={};
                      for(var index=0; index<body.length; index++)  {
                        response[index] = {"name": body[index].name ,"id": body[index].id, "gitId":user};
                        Repository.create(response[index]);
                      }
                      res.send(response)
                    })
                    .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp)); 
                }
                else {
                  Responder.operationFailed(res, "not an Employee");
                }    
             })
             .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp));        
          }
      })
      .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp)); 
    }

}

