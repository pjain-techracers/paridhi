import React, { Component } from 'react';

import stringify from 'json-stringify';


class RemovePage extends Component {
  constructor(props)
  {
    super(props);
    this.state = { id: '', ownerName:'' , repoName:'' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }


  handleSubmit(event){
    event.preventDefault();
    if(this.props.locate==='repos') {
      fetch(`/repos/${event.target.owner.value}/${event.target.RepoName.value}`,{
      method: 'DELETE',
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
     .then(res => alert("repo deleted successfully"))
     .catch(error => alert(error))
    }
    else {
    fetch(`/${this.props.locate}/${event.target.id.value}`, {
      method: 'DELETE',
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
     .then(res => alert("project deleted successfully"))
     .catch(error => alert(error))
   }
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
          <input type="text" className={(this.props.locate!=='repos') ? '' : 'hidden'} placeholder="write id" name="id" value={this.state.id} onChange={this.handleChange} />
          <input type="text" className={(this.props.locate==='repos') ? '' : 'hidden'} placeholder="owner name" name="ownerName" value={this.state.ownerName} onChange={this.handleChange} />
          <input type="text" className={(this.props.locate==='repos') ? '' : 'hidden'} placeholder="repo name" name="repoName" value={this.state.repoName} onChange={this.handleChange}  />
          <input type="Submit" name="Submit" value="Delete" />
        </form>
      </div>
    );
  }
}

export default RemovePage;

