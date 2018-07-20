import React, { Component } from 'react';

class OtherUserRepos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      gitId:'',
      error:''
    }
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
     fetch(`/repos/${event.target.value}`)
      .then(res => res.json())
      .then(repos => this.setState({repos}, () => console.log("repos fetched", repos)));
      
    }
  }
/*  componentDidMount() {
    console.log(this.state.Id)
    fetch(`${this.state.Id}/repos`)
      .then(res => res.json())
      .then(repos => this.setState({repos}, () => console.log("repos fetched", repos)));
  }
*/
  render() {
    return (
      <div>
      <h1> repos </h1>
      <form>
        <input type="text" placeholder='write GIT username here' onKeyPress={this.handleKeyPress.bind(this)} />
      </form>
          <ul>
            {this.state.repos.map(repo => 
              <li key={repo.gitId} className="list-group-item">{repo.name}</li>
            )}
      </ul>
      </div>
    );
  }
}

export default OtherUserRepos;
