import React, { Component } from 'react';

class OtherUserRepos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      details: [],
      GitName: '',
      repoName: ''
    },
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
    handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault(); 
    fetch(`/repos/${event.target.GitName.value}/${event.target.repoName.value}/${this.props.locate}`)
      .then(res => res.json())
      .then(details => this.setState({details}, () => console.log("repos fetched", details)))
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
        <form method="post" onSubmit={this.handleSubmit}>
        <input type="text" placeholder='write GIT username here' name="GitName" value={this.state.GitName} onChange = {this.handleChange} />
        <input type="text" placeholder='Repository Name'  name="repoName" value={this.state.repoName} onChange = {this.handleChange}  />0
        <input type="Submit" name="Submit1" value="GET"/>
        </form>
          <ul className={this.props.locate==='commits' ? '' : 'hidden'}>
            { this.state.details.map(row => 
              <li className="list-group-item">{row.sha}</li>
            )}
          </ul>
              <ul className={this.props.locate==='pulls' ? '' : 'hidden'}>
                { this.state.details.map(row => 
                  <li className="list-group-item">{row.id}</li>
                )}
          </ul>

      </div>
    );
  }
}

export default OtherUserRepos;
