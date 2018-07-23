import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import ItemProject from './itemProject'
import Modal from 'react-modal'
import stringify from 'json-stringify';


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

class ListProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      pr:  [],
      commits: [],
      flag: '',
      modalIsOpen: false,
      name: '',
      empId:'',
      repoId:''

    }
    this.handleRemove = this.handleRemove.bind(this);
 
    //this.commits = this.commits.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.createProject =  this.createProject.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.AddEmployee = this.AddEmployee.bind(this);
    this.AddRepo = this.AddRepo.bind(this)

  }

  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    fetch(`/projects`)
    .then(res =>res.json())
    .then(list => this.setState({list}, () => console.log("projects fetched", list)));
  }

  handleRemove(event) {
    console.log("++++++++++++++++++++++++++++" + event)
    fetch(`/projects/${event}`,{
      method: 'DELETE',
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
     .then(res => alert("project deleted successfully"))
     .then( () => {
      var arr = this.state.list;
      var i = arr.indexOf(event)
      arr.splice(i,1)
      this.setState({list:arr})
    })
     .catch(error => alert(error))
  }


  handleChange(event)
  {
    this.setState({[event.target.name] : event.target.value});
  }

  createProject(event) {
    event.preventDefault();
    var joined = this.state.list.concat(`${this.state.name}`);
    this.setState({list: joined })
    
     fetch(`/projects`, {
      method :'POST',
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body: stringify({ name: this.state.name })
     })
      .then(res => { 
        console.log(res);
        console.log("============="+ this.state.name)
        alert("project successfully created" + this.state.name)
        
      })
      .catch(error => alert(error))
  }

  AddEmployee(event) {  
    this.setState({modalIsOpen: true});
    this.setState({flag:`addEmp`})
    console.log(this.state.empId);
    fetch(`/employees/${this.state.empId}/projects/${event}`,{
      method :'POST',
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
     .then(res => alert("displayed"))
     .catch(error => alert(error))  
  }

  AddRepo(event) {
    this.setState({modalIsOpen: true});
    this.setState({flag:`addRepo`})
    fetch(`/repos/${this.state.repoId}/projects/${event}`,
      {method :'POST', 
       headers: {"Content-type": "application/json; charset=UTF-8"}
    })
     .then(res => alert("repo-project displayed"))
     .catch(error => alert(error))

  }

  showEmployees( event) {
    fetch(`/projects/emp/${event}`, {
      method :'POST',
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
     .then(res => alert("repo-project displayed"))
     .catch(error => alert(error))

  }

  showRepos(event) {
       fetch(`/projects/repos/${event}`, {
        method :'POST',
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
     .then(res => alert("repo-project displayed"))
     .catch(error => alert(error))

  }

  render() { 
    return (
      <div>
      <button className='btn btn-primary' onClick={this.openModal} >Create</button>
      <h1> List </h1>
      <ul>
      { this.state.list.map((item, index) => {
        return(
          <ItemProject
            key = { item.id }
            item = { item.name }
            value = { item.id }
            addEmp = {this.AddEmployee}
            addRepo = { this.AddRepo }
            showEmp = { this.showEmployees }
            showRepo = { this.showRepos }
            removeItem = { this.handleRemove }

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
    
        <div className={this.state.flag==='create' ? '' : 'hidden'}>   
          <form method="post" onSubmit={this.createProject}>
            <input type="text" placeholder="create project" name="name" value={this.state.name} onChange={this.handleChange} />
            <input type="Submit" name="Submit" value="Add" />
          </form>
        </div>

        <div className={this.state.flag==='addEmp' ? '' : 'hidden'}>
    
          <form method="post" onSubmit={this.AddEmployee} >
            <input type="text" placeholder="add emp" name="empId" value={this.state.empId} onChange={this.handleChange} />
            <input type="Submit" name="Submit" value="Submit" />
          </form>
        </div> 

        <div className={this.state.flag==='addRepo' ? '' : 'hidden'}>
            <form method="post" onSubmit={this.AddRepo} >
            <input type="text" placeholder="add repo" name="repoId" value={this.state.repoId} onChange={this.handleChange} />
            <input type="Submit" name="Submit" value="Submit" />
          </form>
        </div> 


     
      </Modal>

      </div>

    );
  }
}


export default ListProject;
