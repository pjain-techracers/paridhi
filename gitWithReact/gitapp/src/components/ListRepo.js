import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Item from './itemRepo'
import Modal from 'react-modal'
import stringify from 'json-stringify';
import '../App.css';
import _ from 'lodash'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height                : '500px',
    overflow              : 'scroll'
  }
};

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      pullrequest:  [],
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
    this.createRepository =  this.createRepository.bind(this);
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
     .then(res => res.json())
      .then(list => {
        console.log(list)
        if(list.hasOwnProperty("reason")) {
          alert(list.reason)
        }
        else {
          this.setState({list: list});     
        }
      })
      .catch(error => alert(error))  
  }

  handleRemove(event) {
    console.log("++++++++++++++++++++++++++++" + event)
    fetch(`/repos/pjain-techracers/${event}`, {
      method: 'DELETE',
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
      .then(res => { 
        console.log(event)
        console.log(this.state.list)
        let arr = this.state.list;
        let index = _.findIndex(arr, value => value.name == `${event}`);
        arr[index] = null;
        let finalArray = _.compact(arr);
        this.setState({list : finalArray});
      })
     .catch(error => alert(error))
  }

  prList(event) {
    fetch(`/repos/pjain-techracers/${event}/pulls`)
     .then(res => res.json())
      .then(pullrequest => {
        this.setState({ flag: `pulls` })
        this.setState({ modalIsOpen: true});
        this.setState({ pullrequest: pullrequest }, () => console.log("pr fetched", pullrequest))
      })
      .catch(error => {
        this.setState({ flag: `pulls` })
        this.setState({ modalIsOpen: true});
      })
  }

  commits(event) {
    fetch(`/repos/pjain-techracers/${event}/commits`)
     .then(res => res.json())
      .then(commits => {
        this.setState({ flag:`commits` })
        this.setState({ modalIsOpen: true });
        this.setState({ commits :commits }, () => console.log("commits fetched", commits))   
      })
      .catch(error => {
        this.setState({flag:`commits`})
        this.setState({modalIsOpen: true});
      })
  }

  handleOptionChange(event) {
    this.setState({flag:`otherRepo`})
    this.setState({selectedOption: event.target.value});
      if(event.target.value=='option1') {
        this.setState({modalIsOpen: true})
      }
    }

  otherRepo(event) {
    event.preventDefault();
    fetch(`/repos/${this.state.usename}`)
     .then(res => res.json())
      .then(repos => {
        console.log(repos);
        if(repos.hasOwnProperty("reason")) {
          alert(repos.reason)
        }
        else {
          this.setState({repos: repos});
        }  
      })
  }
      
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  createModal() {
    this.setState({modalIsOpen: true}) 
  }

  createRepository(event) {
    event.preventDefault();
      fetch(`/repos`, {
      method :'POST',
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body: stringify({ name: this.state.name, gitId: this.state.gitId })
      })
       .then(res => res.json())
        .then(repoStatus => {
          console.log(repoStatus);
          if(repoStatus.hasOwnProperty("gitId")) {
            console.log('ifffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
            let joined = this.state.list.concat({ id:repoStatus.id, name: repoStatus.name, gidId: repoStatus.gitId }) 
            this.setState({ list: joined })
            alert("repository successfully created - " + repoStatus.name) 
          }
          else {
            alert(repoStatus.reason)
            console.log('elseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
          }  
        })
       .catch(error => alert(error))
  }

  render() {
    return (
      <div>
        <div className="radio-align" >
          <label>
            <input type="radio" name="current" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange} /> Own Repos
          </label>
            <input type="radio" name="otherRepo" value="option1" checked={this.state.selectedOption === 'option1'}  onChange={this.handleOptionChange} />other user Repo
        </div>
        <button className='btn btn-primary' onClick={this.openModal} >Create</button>
        <h1> List </h1>
        <ul>
        { _.map(this.state.list, item => {
            return(
              <Item 
                key = { item.name }
                item = { item.name}
                value = { item }
                removeItem = {this.handleRemove}
                listPR = { this.prList }
                listCommits = { this.commits }
              />
            )
          })
        }
        </ul>
        <Modal
          ariaHideApp={false}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <button onClick={this.closeModal} >close</button>
          <div className={this.state.flag==='commits' ? '' : 'hidden'}>
          <ul>
            { _.map(this.state.commits, row => 
                <li className="list-group-item">SHA: {row.sha } , Message: { row.message}</li>
              )}
          </ul>
          </div>
          <div className={this.state.flag==='pulls' ? '' : 'hidden'}>
            <ul >
              { _.map(this.state.pullrequest, row => 
                <li className="list-group-item">PullRequest-Id: {row.id}, </li>
              )}
            </ul>
          </div>
          <div className={this.state.flag==='create' ? '' : 'hidden'}>
            <form method="post" onSubmit={this.createRepository} >
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
                { _.map(this.state.repos, row => 
                  <li className="list-group-item">{row.name}</li>
                )}
               </ul>
          </div>
        </Modal>
      </div>
    );
  }
}


export default List;
