import React, { Component } from 'react';
import stringify from 'json-stringify';


class Projects extends Component {

  constructor(props)
  {
    super(props);
    this.state = { id: '',
                   name : '',
                   projectID: '',
                   empId: '',
                   projectId: '',
                   repoId: '',
                   project: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.addProject = this.addProject.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
    this.mapEmpProject = this.mapEmpProject.bind(this);
    this.mapRepoProject = this.mapRepoProject.bind(this);

  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  addProject(event){
     event.preventDefault();
     fetch('/projects', {method :'POST', headers: {"Content-type": "application/json; charset=UTF-8"}, body: stringify({id: this.state.id, name: this.state.name})
     })
      .then(res => alert("project has been successfully created"))
      .catch(error => alert(error))   
  }

  deleteProject(event){
    event.preventDefault(); 
    fetch(`/projects/${event.target.projectID.value}`, {method: 'DELETE', headers: {"Content-type": "application/json; charset=UTF-8"}})
     .then(res => alert("project deleted successfully"))
     .catch(error => alert(error))
  }
   
  mapEmpProject(event){
    event.preventDefault();
    fetch(`/employees/${event.target.empId.value}/projects/${event.target.projectId.value}`, {method :'POST', headers: {"Content-type": "application/json; charset=UTF-8"}
    })
     .then(res => alert("emp-project displayed"))
     .catch(error => alert(error))
  }

  mapRepoProject(event){
    event.preventDefault();
    fetch(`/repos/${event.target.repoId.value}/projects/${event.target.project.value}`, {method :'POST', headers: {"Content-type": "application/json; charset=UTF-8"}
    })
     .then(res => alert("repo-project displayed"))
     .catch(error => alert(error))
  }


 
  render() {
    return (
      <div >   
        <div>
          <form method="post" onSubmit={this.addProject}>
          <label> add new project</label>
            <input type="text" placeholder="id" name="id" value={this.state.id} onChange={this.handleChange} required />
            <input type="text" placeholder="project-name" name="name" value={this.state.name} onChange={this.handleChange} required />
            <input type="Submit" name="Submit" value="Add" />
          </form>
        </div>
        <div>
          <form method="post" onSubmit={this.deleteProject}>
          <label> delete project</label>
            <input type="text" placeholder="project-id" name="projectID" value={this.state.projectID} onChange={this.handleChange} required />
            <input type="Submit" name="Submit1" value="Delete"/>
          </form>
        </div>
        <div>
          <form method="post" onSubmit={this.mapEmpProject}>
          <label> map employee project</label>
            <input type="text" placeholder="employee-id" name="empId" value={this.state.empId} onChange={this.handleChange} required />
            <input type="text" placeholder="project-id" name="projectId" value={this.state.projectId} onChange={this.handleChange} required />
            <input type="Submit" name="Submit1" value="Add"/>
          </form>
        </div>
        <div>
          <form method="post" onSubmit={this.mapRepoProject}>
            <input type="text" placeholder="repo-id" name="repoId" value={this.state.repoId} onChange={this.handleChange} required />
            <input type="text" placeholder="project-id" name="project" value={this.state.project} onChange={this.handleChange} required />
            <input type="Submit" name="Submit1" value="Add"/>
          </form>
        </div> 
      </div>
    );
  }
}

export default Projects;