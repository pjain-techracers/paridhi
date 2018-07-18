import React, { Component } from 'react';

import stringify from 'json-stringify';


class RemoveProject extends Component {
  constructor(props)
  {
    super(props);
    this.state = { id1: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }


  handleSubmit(event){
    event.preventDefault(); 
    fetch(`/projects/${event.target.id1.value}`, {
      method: 'DELETE',
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
     .then(res => alert("project deleted successfully"))
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
      <div className="App">     
          <form method="post" onSubmit = {this.handleSubmit}>
            <input type="text" placeholder = "project id" name="id1" value = {this.state.id1} onChange={this.handleChange} required />
            <input type="Submit" name = "Submit1" value ="Delete"/>
          </form>   
      </div>
    );
  }
}

export default RemoveProject;

