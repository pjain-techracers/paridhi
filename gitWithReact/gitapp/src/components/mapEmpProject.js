import React, { Component } from 'react';
import stringify from 'json-stringify';


class MapEmpProject extends Component {
  constructor(props)
  {
    super(props);
    this.state = { empId: '',
                   projectId: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }


  handleSubmit(event){
    event.preventDefault();
    fetch(`/employees/${event.target.empId.value}/projects/${event.target.projectId.value}`, {method :'POST', headers: {"Content-type": "application/json; charset=UTF-8"}
    })
     .then(res => alert("displayed"))
     .catch(error => alert(error))

  }
  
 /* componentDidMount() {
   fetch('/projects', {method :'POST', headers: {
      "Content-type": "application/json; charset=UTF-8"
    }, body: stringify({id: this.state.id, name: this.state.name})
   })
   .then(res => console.log("save ho gya"));
  }*/
 
  render() {
    return (
      <div>       
        <form method="post" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="employee-id" name="empId" value={this.state.empId} onChange={this.handleChange} required />
          <input type="text" placeholder="project-id" name="projectId" value={this.state.projectId} onChange={this.handleChange} required />
          <input type="Submit" name="Submit1" value="Add"/>
        </form>  
      </div>
    );
  }
}

export default MapEmpProject;
