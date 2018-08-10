import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import ItemEmployee from './itemEmp'
import Modal from 'react-modal'
import stringify from 'json-stringify';
import _ from 'lodash';


const customStyles = {
  content : {
    top          : '50%',
    left         : '50%',
    right        : 'auto',
    bottom       : 'auto',
    marginRight  : '-50%',
    transform    : 'translate(-50%, -50%)',
    height       : '500px',
    overflow     : 'scroll'
  }
};

class ListProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list        :  [],
      pr          :  [],
      commits     : [],
      flag        : '',
      modalIsOpen : false,
      name        : '',
      empId       : '',
    }
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.createEmp =  this.createEmp.bind(this);

  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }
 
  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount() {
    fetch(`/employees`)
     .then(res =>res.json())
     .then(list => this.setState({list}, () => console.log("employees fetched", list)));
  }

  handleRemove(event) {
    console.log("++++++++++++++++++++++++++++" + event)
    fetch(`/employees/${event}`, {
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


  handleChange(event) { 
    this.setState({[event.target.name]: event.target.value})
  }

  createModal() {
    this.setState({modalIsOpen: true});
  }
  createEmp(event) {
    event.preventDefault();
      fetch(`/employees`, {
      method  : 'POST',
      headers : { "Content-type": "application/json; charset=UTF-8" },
      body: stringify({ name: this.state.name , gitId: this.state.gitId })
      })
      .then(res => res.json()) 
        .then( empStatus => {
          console.log(empStatus)
          if(empStatus.hasOwnProperty("reason")) {
            alert(empStatus.reason)
          }
          else {
            let joined = this.state.list.concat({ name: empStatus.name, id: empStatus.id, GitId: empStatus.GitId });
            this.setState({list: joined })
            alert("emp successfully created - " + empStatus.name)  
          }  
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
          })
        }
        </ul>
        <Modal 
          ariaHideApp={false}
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
