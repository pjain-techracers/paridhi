import React from 'react';
 export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
   
  removeToDo(e) {
    e.preventDefault();
    this.props.removeToDo(this.props.task.key)
  }
   render() {
     return (
       <li>
           {this.props.task+" "}
         <button className="btn-danger btn-xs" onClick={this.removeToDo.bind(this)}>X</button>
       </li>
     )
   }
 }