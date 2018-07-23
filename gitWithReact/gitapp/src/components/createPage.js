import React, { Component } from 'react';
import stringify from 'json-stringify';
import Modal from 'react-modal'

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

class CreatePage extends Component {
  constructor(props)
  {
    super(props);
    console.log(this.props.locate)
    this.state = { name : '', gitId: '',modalIsOpen: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
    openModal() {
    this.setState({modalIsOpen: true});
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
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
      <Modal
        isOpen={this.state.modalIsOpen}          
        onRequestClose={this.closeModal}
        style={customStyles}>
        <form method="post" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} />
          <input type="text"  className={(this.props.locate==='employees') ? '' : 'hidden'} placeholder="Git-username" name="gitId" value={this.state.gitId} onChange={this.handleChange}  />
          <input type="Submit" name="Submit" value="Add" />
        </form>
        <button onClick={this.closeModal}>close</button>

     
      </Modal>
    );
  }
}

export default CreatePage;
