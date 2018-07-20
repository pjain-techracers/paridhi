import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Repos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    fetch(`/${this.props.locate}`)
    .then(res =>res.json())
    .then(repos => this.setState({repos}, () => console.log("repos fetched", repos)));
  }

  handleClick(event){
    event.preventDefault(); 
    console.log(event.target.name.value);
    console.log(event.target.value);
    console.log("++++++++++++++++++++++++++++")
    fetch(`/repos/pjain-techracers/${event.target.value}`,{
      method: 'DELETE',
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
     .then(res => alert("repo deleted successfully"))
     .catch(error => alert(error))
  }

  render() {
    return (
      <div>
      <Link to={`${this.props.match.url}/create`} className='btn btn-primary' >Create</Link>
      <h1> repos </h1>
      <ul>
      {this.state.repos.map(repo => 
        <li key={repo.id} name={repo.name} value={repo.name} className="list-group-item">{repo.name}<button type="button" class="btn btn-danger" name={repo.name} value={repo.name} onClick={this.handleClick.bind(this)}>Delete</button> </li>

        )}
      </ul>
      </div>
    );
  }
}

export default Repos;
