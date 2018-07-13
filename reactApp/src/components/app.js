import React from 'react';
import ToDo from './ToDo';
import { Route} from 'react-router'
import { BrowserRouter as Router, Link} from 'react-router-dom'
import User from './User'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
    this.remove = this.remove.bind(this);
  }
    
   handleKeyPress= (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.setState({
        tasks: this.state.tasks.concat(this.refs.task.value)   
      })
      this.refs.task.value=''
    }
  }
   remove = (i) => {
    var arr = this.state.tasks
    arr.splice(i,1)
    this.setState({tasks:arr})
   }

    render() {
      return (
        <div className="container">
          <h2 > TO DO LIST </h2>
          <form>
          <input type="text" ref="task" placeholder='Write task...' onKeyPress={this.handleKeyPress.bind(this)}/>
          </form>
          <ul>
            {this.state.tasks.map((task,index)=> {
              return (
              <ToDo
                key = {index}
                task={task}
                removeToDo ={this.remove}/>
                );
            })}
          </ul>
         <Router>
          <div>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
            </ul>
          <hr />
          <Route path="/home" component={User} />
          </div>
        </Router>
      </div>
      );
    }
  }