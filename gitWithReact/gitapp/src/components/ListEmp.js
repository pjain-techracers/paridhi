import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import ItemEmployee from './itemEmp'
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
      empId:''

    }
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
    //this.commits = this.commits.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.createEmp =  this.createEmp.bind(this);

  }

  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    fetch(`/employees`)
    .then(res =>res.json())
    .then(list => this.setState({list}, () => console.log("projects fetched", list)));
  }

  handleRemove(event) {
    console.log("++++++++++++++++++++++++++++" + event)
    fetch(`/employees/${event}`,{
      method: 'DELETE',
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
     .then(res => alert("emp deleted successfully"))
     .then( () => {
      var arr = this.state.list;
      var i = arr.indexOf(event)
      arr.splice(i,1)
      this.setState({list:arr})
    })
     .catch(error => alert(error))
  }


  handleChange(event)
  {this.setState({[event.target.name]: event.target.value})}

  createModal() {
    this.setState({modalIsOpen: true});
  }
  createEmp(event) {
    event.preventDefault();
    
     fetch(`/employees`, {
      method :'POST',
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body: stringify({ name: this.state.name , gitId: this.state.gitId})
     })
      .then(res => { 
        console.log(res);
        console.log("============="+ this.state.name)
        var joined = this.state.list.concat({ name:this.state.name} );
        console.log('I m here ', joined);
        this.setState({list: joined })

        alert("emp successfully created" + this.state.name)
        
      })
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
          <ItemEmployee
            key = { item.id }
            item = { item.name }
            value = { item.id }
            removeItem = { this.handleRemove }
          />
          )
      })}
      </ul>
      <Modal
        isOpen={this.state.modalIsOpen}          
        onRequestClose={this.closeModal}
        style={customStyles}>
        <form method="post" onSubmit={this.createEmp}>
          <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} />
          <input type="text" placeholder="Git-username" name="gitId" value={this.state.gitId} onChange={this.handleChange}  />
          
          <input type="Submit" name="Submit" value="Add" />
        </form>
        <button onClick={this.closeModal}>close</button>

     
      </Modal>

      </div>

    );
  }
}


export default ListProject;
