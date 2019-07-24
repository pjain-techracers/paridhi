import Responder from '../../lib/expressResponder';
import Express from '../../lib/express';
import { Project, RepoProject, EmpProject, Employee, Repository } from '../models'
import {Request, headers} from '../../lib/authenticated';
let query = {}

export default class ProjectController {

  static createProject(req, res)  {
   	let { name } = req.body;
    console.log(req.body)
    Project.create({ name })
      .then(newProject => Responder.created(res, newProject))
      .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp));
    }

  static projectList(req,res) {
    Project.findAll()
      .then((project) => Responder.success(res,project))
      .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp));
    }


  static deleteProject(req, res) {
   	let { projectId } = req.params
    Project.destroy( {where: {"id": projectId}})
      .then(back => Responder.deleted(res))
      .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp));
  }

  static mapProjectRepo(req,res) {
    let { repoId, projectId } = req.params;

    RepoProject.create({repoId:req.params.repoId, projectId:req.params.projectId})
    .then(() => {
      res.send.bind(res);
    })
    .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp));

    // async function callRepoProject() {
    //   try {
    //     let repoDetails = await RepoProject.create({ repoId: req.params.repoId, projectId: req.params.projectId})
    //     Responder.created(res, repoDetails);
    //    }
    //   catch(errorOnDBOp) {
    //     Responder.operationFailed(res, errorOnDBOp);
    //   }
    // }
    // Repository.findAll({where : {id : repoId}})
    //  .then(repodetails=> {
    //    (repodetails.length>0) ? callRepoProject() : Responder.operationFailed(res , "no such repoId exists")
    //   })
    //  .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp));
  }

  static listRepoWithProjectId(req,res) {
    var projectId = req.params.projectId;
    RepoProject.findAll({
      where:{ projectId: projectId},
      include:[ {all:true}]
     })
      .then(RepoProject => {
          Responder.success(res, RepoProject);
      })
      .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp));
  }

  static mapProjectEmployee(req,res) {
    let { empId, projectId } = req.params

    EmpProject.create({ empId, projectId })
      .then(() => {
        res.send("added new row");
      })
      .then(() => Responder.created(res))
      .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp));
  }
    // async function callEmpProject() {
    //   try {
    //     let empDetails = await EmpProject.create({ empId: req.params.empId, projectId: req.params.projectId })
    //     Responder.created(res, empDetails)
    //   }
    //   catch(errorOnDBOp) {
    //     Responder.operationFailed(res, errorOnDBOp)
    //   }
    // }

    // Employee.findAll({ where : {id : empId} })
    //  .then(empdetails => {
    //     (empdetails.length>0) ? callEmpProject() : Responder.operationFailed(res, "no such employee exists")
    //  })
    //  .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp));


  static listEmployeesWithProjectId(req, res) {
    var projectId = req.params.projectId;
     EmpProject.findAll({
      where:{ projectId: projectId},
      include:[ {all: true}]
     })
      .then( empProject => {
         Responder.success(res, empProject)
       })
      .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp));
  }
}

/*  repoProjectFunc(err, callback) { //repoDetails required
      if (err) throw err;
      RepoProject.create({repoId:req.params.repoId, projectId:req.params.projectId})
      .then(() => callback());
      .catch(errorOnDBOp => )
    }

    repoSearch(err, callback) {
      if(err) throw err;
      Repository.findAll({where : {id : repoId}})
      .then(()=>)
      callback();
    }

    mappingFunc(err, callback) {
      repoSearch(function(){
        repoProjectFunc(err, callback);
      });
    }

    mappingFunc(function(){});
*/
