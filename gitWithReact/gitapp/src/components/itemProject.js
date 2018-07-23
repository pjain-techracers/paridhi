import React, { Component } from 'react';
class Item extends Component {
  constructor(props) {
    super(props);
  }
   
  removeItem(e) {
    e.preventDefault();
    console.log(this.props.value)
    this.props.removeItem(this.props.value)
  }
  showEmp(e) {
    e.preventDefault();
    this.props.showEmp(this.props.value)
  }
  showRepo(e) {
    e.preventDefault();
    this.props.showRepo(this.props.value)
  }
  addEmp(e) {
    e.preventDefault();
    this.props.addEmp(this.props.value)
  }
    addRepo(e) {
    e.preventDefault();
    this.props.addRepo(this.props.value)
  }
   render() {
     return (
       <li className="list-group-item">
          {this.props.item+" "}
          <button className="btn btn-info" value = { this.props.key } onClick={this.addEmp.bind(this)}> add Employee</button>
          <button className="btn btn-secondary" value = { this.props.item } onClick={this.showEmp.bind(this)}> show employees</button>
          <button className="btn btn-info" value = { this.props.item } onClick={this.addRepo.bind(this)}> add Repo </button>
          <button className="btn btn-secondary" value = { this.props.item } onClick={this.showRepo.bind(this)}> Show Repo</button>
          <button className="btn-danger btn-xs" value = { this.props.key } onClick={this.removeItem.bind(this)}> Delete</button>
       </li>
       
     )
   }
 }

 export default Item;