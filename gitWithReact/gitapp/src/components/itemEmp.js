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
   render() {
     return (
       <li className="list-group-item">
          {this.props.item+" "}
          <button className="btn-danger btn-xs" value = { this.props.key } onClick={this.removeItem.bind(this)}> Delete</button>
       </li>
       
     )
   }
 }

 export default Item;