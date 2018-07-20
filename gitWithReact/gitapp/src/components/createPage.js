import React, { Component } from 'react';
import stringify from 'json-stringify';


class CreateRepo extends Component {
  constructor(props)
  {
    super(props);
    console.log(this.props.locate)
    this.state = { name : '', gitId: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event){
     event.preventDefault();
     fetch(`/${this.props.locate}`, {
      method :'POST',
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body: stringify({ name: this.state.name, gitId: this.state.gitId})
     })
      .then(res => alert(" successfully created"))
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
          <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} />
          <input type="text"  className={(this.props.locate==='employees') ? '' : 'hidden'} placeholder="Git-username" name="gitId" value={this.state.gitId} onChange={this.handleChange}  />
          <input type="Submit" name="Submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default CreateRepo;
