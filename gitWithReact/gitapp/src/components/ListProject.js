import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import ItemProject from './itemProject'
import Modal from 'react-modal'
import stringify from 'json-stringify';
import _ from 'lodash';


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

class ListProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      pr:  [],
      commits: [],
      flag: '',
      modalIsOpen: false,
      showEmployees:[],
      name: '',
      empId: '',
      repoId: '',
      projectname: '',
      naya: '',
      employees: [],
      repositories: [],
      eventvalue: '',
      eventRepo: ''

    }
    this.handleRemove = this.handleRemove.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.createProject =  this.createProject.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.AddEmployee = this.AddEmployee.bind(this);
    this.AddRepo = this.AddRepo.bind(this);
    this.showEmployees = this.showEmployees.bind(this);
    this.showRepos = this.showRepos.bind(this);
    this.AddEmp = this.AddEmp.bind(this);
    this.AddRepository = this.AddRepository.bind(this);

  }

  openModal() {
    this.setState({modalIsOpen: true});
    this.setState({flag:`create`})
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
     .then(() => {
        let arr = this.state.list;
        let index = _.findIndex(arr, value => value.id == `${event}`);
        arr[index] = null;
        let finalArray = _.compact(arr);
        this.setState({list : finalArray}); 
      })
     .catch(error => alert(error))
  }


  handleChange(event)
  {
    this.setState({[event.target.name] : event.target.value});
  }

  createProject(event) {
    event.preventDefault();
      fetch(`/projects`, {
      method :'POST',
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body: stringify({ name: this.state.name })
      })
       .then(res =>  res.json())
        .then(projectStatus => { 
          console.log(projectStatus)
          if(projectStatus.hasOwnProperty("reason")) {
            alert(projectStatus.reason)
          } 
          else {
            let joined = this.state.list.concat({ name: projectStatus.name, id: projectStatus.id });
            this.setState({list: joined})
            alert("project successfully created - " + projectStatus.name)  
          }     
        })
        .catch(error => alert(error))
  }

  AddEmployee(event) {
    this.setState({eventEmp: event});
    this.setState({modalIsOpen: true});
    this.setState({flag:`addEmp`}) 
  }

  AddEmp(event){
    event.preventDefault(); 
    fetch(`/employees/${this.state.empId}/projects/${this.state.eventEmp}`, {
      method :'POST',
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
     .then(res => res.json())
      .then(resReason => {
        console.log(resReason);
        if(resReason.hasOwnProperty("projectId")) {
          alert("Employee Added")
        }
        else {
          alert(resReason.reason)
        }
      })
      .catch(error => alert(error)) 
  }

  AddRepo(event) {
    this.setState({eventRepo: event})
    this.setState({modalIsOpen: true});
    this.setState({flag:`addRepo`})   
  }

  AddRepository(event) {
    event.preventDefault();
    fetch(`/repos/${this.state.repoId}/projects/${this.state.eventRepo}`, {
      method :'POST', 
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
     .then(res => res.json())
      .then(resReason => {
        if(resReason.hasOwnProperty("projectId")) {
          alert("Repository Added")
        }
        else {
          alert(resReason.reason)
        }
      })
      .catch(error => alert(error))
  }

  showEmployees(event) {
    fetch(`/projects/emp/${event}`)
     .then(res => res.json())
     .then(employees => {
        if(employees.length) {
          this.setState({ flag: `showEmp` })
          this.setState({ modalIsOpen: true });
          this.setState({ employees: employees }, () => console.log("employees fetched", employees))  
        }
        else {
          alert("no employee") 
        }  
      })
      .catch(error => {
          this.setState({ flag: `showEmp` })
          this.setState({ modalIsOpen: true });
      })
  }

  showRepos(event) {
    fetch(`/projects/repos/${event}`)
     .then(res => res.json())
     .then(repositories => {
        if(repositories.length) {
          this.setState({ flag: `showRepo` })
          this.setState({ modalIsOpen:true })
          this.setState({ repositories: repositories }, () => console.log("repos fetched", repositories))
        }
        else {
          alert("no repos")
        }
      })
      .catch(error => {
        this.setState({ flag: `showRepo` })
        this.setState({ modalIsOpen: true });
      })
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
          })
        }
        </ul>
        <Modal
          ariaHideApp={false}
          isOpen={ this.state.modalIsOpen }        
          onRequestClose={ this.closeModal }
          style={customStyles}>
          <button onClick={ this.closeModal }>close</button>
      
          <div className={this.state.flag==='create' ? '' : 'hidden'}>   
            <form method="post" onSubmit={this.createProject}>
              <input type="text" placeholder="create project" name="name" value={this.state.name} onChange={this.handleChange} />
              <input type="Submit" name="Submit" value="Add" />
            </form>
          </div>
          <div className={this.state.flag==='addEmp' ? '' : 'hidden'}>
            <form method="post" onSubmit={this.AddEmp} >
              <input type="text" placeholder="enter-employee-id" name="empId" value={this.state.empId} onChange={this.handleChange} />
              <input type="Submit" name="Submit-emp" value="add" />
            </form>
          </div> 
          <div className={this.state.flag==='addRepo' ? '' : 'hidden'}>
            <form method="post" onSubmit={this.AddRepository} >
              <input type="text" placeholder="enter-repo-id" name="repoId" value={this.state.repoId} onChange={this.handleChange} />
              <input type="Submit" name="Submit" value="Submit" />
            </form>
          </div>
          <div className={this.state.flag==='showEmp' ? '' : 'hidden'}>
            <ul>
              {  
                _.map(this.state.employees, row => 
                <li className="list-group-item">Emp-name: {row.emp.name} , Emp-id: {row.emp.id}</li>
              )}
            </ul>
          </div>
          <div className={this.state.flag==='showRepo' ? '' : 'hidden'}>
            <ul>
              {  
                _.map(this.state.repositories, row => 
                <li className="list-group-item">Repo-name: {row.repo.name} , Repo-id: {row.repo.id}</li>
              )
            }
            </ul>
          </div>      
        </Modal>
      </div>
    );
  }
}


export default ListProject;
