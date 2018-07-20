import React, { Component } from 'react';
import stringify from 'json-stringify';


class mapRepoProject extends Component {

  constructor(props)
  {
    super(props);
    this.state = { projectId: '', repoId: '' };
    this.handleChange = this.handleChange.bind(this);
    this.mapRepoProject = this.mapRepoProject.bind(this);

  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
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
      <div>
        <form method="post" onSubmit={this.mapRepoProject}>
          <input type="text" placeholder="repo-id" name="repoId" value={this.state.repoId} onChange={this.handleChange} required />
          <input type="text" placeholder="project-id" name="project" value={this.state.project} onChange={this.handleChange} required />
          <input type="Submit" name="Submit1" value="Add"/>
        </form>   
      </div>
    );
  }
}

export default mapRepoProject;