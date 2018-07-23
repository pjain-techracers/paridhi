import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Item from './item'
import Modal from 'react-modal'
import stringify from 'json-stringify';
import './options.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height : '500px',
    overflow              : 'scroll'
  }
};

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      pr:  [],
      commits: [],
      flag: '',
      modalIsOpen: false,
      name: '',
      selectedOption: 'option2',
      repos: [],
      usename:''

    }
    this.handleRemove = this.handleRemove.bind(this);
    this.prList = this.prList.bind(this);
    this.commits = this.commits.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.createRepo =  this.createRepo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.otherRepo = this.otherRepo.bind(this)
  }

  openModal() {
    this.setState({modalIsOpen: true});
    this.setState({flag:`create`})
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    fetch(`/${this.props.locate}`)
    .then(res =>res.json())
    .then(list => this.setState({list}, () => console.log("repos fetched", list)));
  }

  handleRemove(event) {
    console.log("++++++++++++++++++++++++++++" + event)
    fetch(`/repos/pjain-techracers/${event}`,{
      method: 'DELETE',
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
     .then(res => alert("repo deleted successfully"))
     .then( () => {
      var arr = this.state.list;
      var i = arr.indexOf(event)
      arr.splice(i,1)
      this.setState({list:arr})
    })
     .catch(error => alert(error))
  }

    prList(event){
      //this.setState({modalIsOpen: true});
      fetch(`/repos/pjain-techracers/${event}/pulls`)
        .then(res => res.json())
        .then(pr => {
          this.setState({pr}, () => console.log("pr fetched", pr))
          this.setState({flag:`pulls`})
      })
  }

    commits(event) {
      this.setState({flag:`commits`})
      this.setState({modalIsOpen: true});

      fetch(`/repos/pjain-techracers/${event}/commits`)
        .then(res => res.json())
        .then(commits => {
          this.setState({commits}, () => console.log("commits fetched", commits))
          
        })
  }

  handleOptionChange(event) {
    this.setState({flag:`otherRepo`})
    this.setState({selectedOption: event.target.value});
      if(event.target.value=='option1') {
        this.setState({modalIsOpen: true})
      }
    }

  otherRepo() {
    fetch(`/repos/${this.state.usename}`)
      .then(res => res.json())
      .then(repos => this.setState({repos}, () => console.log("repos fetched", repos)));
  }
      
      
  

  handleChange(event)
  {this.setState({[event.target.name]: event.target.value})}

  createModal() {
    this.setState({modalIsOpen: true})

    
  }
  createRepo(event) {
    //this.setState({flag:`create`});
    event.preventDefault();
     fetch(`/repos`, {
      method :'POST',
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body: stringify({ name: this.state.name, gitId: this.state.gitId})
     })
      .then(res => {
        alert(" successfully created")
        this.setState({
          list: this.state.list.concat(event)   
        })
      })
      .catch(error => alert(error))

  }

  render() {
    return (
      <div>
        <div className="radio-align">
          <label>
            <input type="radio" name="current" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange} /> Own Repos
          </label>
            <input type="radio" name="otherRepo" value="option1" checked={this.state.selectedOption === 'option1'}  onChange={this.handleOptionChange} />other user Repo
        </div>
      <button className='btn btn-primary' onClick={this.openModal} >Create</button>
      <h1> List </h1>
      <ul>
      { this.state.list.map((item, index) => {
        return(
          <Item 
            key = { item.name }
            item = { item.name}
            value = { index }
            removeItem = {this.handleRemove}
            listPR = { this.prList }
            listCommits = { this.commits }
          />
          )
      })}
      </ul>
      <Modal
        isOpen={this.state.modalIsOpen}
        
        onRequestClose={this.closeModal}
        style={customStyles}
        >
        <button onClick={this.closeModal} >close</button>
        <div className={this.state.flag==='commits' ? '' : 'hidden'}>
        <ul >
          { this.state.commits.map(row => 
            <li className="list-group-item">SHA: {row.sha } , Message: { row.message}</li>
          )}
        </ul>
        </div>

        <div className={this.state.flag==='pulls' ? '' : 'hidden'}>
          <ul >
            { this.state.pr.map((obj,i) => 
              <li className="list-group-item">{obj}</li>
            )}
          </ul>
        </div>
        <div className={this.state.flag==='create' ? '' : 'hidden'}>
    
          <form method="post" onSubmit={this.createRepo} >
            <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} />
            <input type="Submit" name="Submit" value="Add" />
          </form>
        </div> 
        <div className={this.state.flag==='otherRepo' ? '' : 'hidden'}>
          <form method="post" onSubmit = {this.otherRepo}>
            <input type="text" placeholder='write GIT username here' name='usename'  value={this.state.usename} onChange={this.handleChange} />
            <input type="Submit" name="Submit" value="Submit" />
          </form>
              <ul>
                {this.state.repos.map(repo => 
                <li key={repo.gitId} className="list-group-item">{repo.name}</li>
            )}
      </ul>
      </div>
      </Modal>

      </div>

    );
  }
}


export default List;
