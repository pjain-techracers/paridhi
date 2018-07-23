import React, { Component } from 'react';
class Item extends Component {
  constructor(props) {
    super(props);
  }
   
  removeItem(e) {
    e.preventDefault();
    console.log(this.props.item)
    this.props.removeItem(this.props.item)
  }
  listCommits(e) {
    e.preventDefault();
    this.props.listCommits(this.props.item)
  }
  listPR(e) {
    e.preventDefault();
    this.props.listPR(this.props.item)
  }
   render() {
     return (
       <li className="list-group-item">
          {this.props.item+" "}
          <button className="btn btn-info" value = { this.props.item } onClick={this.listPR.bind(this)}> Pull Requests</button>
          <button className="btn btn-secondary" value = { this.props.item } onClick={this.listCommits.bind(this)}> Commits</button>
          <button className="btn-danger btn-xs" value = { this.props.item } onClick={this.removeItem.bind(this)}> Delete</button>
       </li>
     )
   }
 }

 export default Item;