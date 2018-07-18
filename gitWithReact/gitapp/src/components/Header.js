import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import { BrowserRouter as Router} from 'react-router-dom'
import RepoOptions from './repoOptions'
import { Route} from 'react-router'
import Projects from './projects'

class Header extends Component {
  render() {
    return (
      <div className='header text-center'>
      <h3 > Welcome To Virtual Git</h3>
      <Router>
        <div className="dropdown btn-group">
           <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Git Options
           <span className="caret"></span></button>
           <ul className="dropdown-menu">
             <li><Link to="/repos"  > Repository</Link></li>
             <li><Link to="/projects" > Projects</Link></li>
             <li><Link to="/emp"> Employees</Link></li>
           </ul>
           
           <Route path={`/repos`} component={RepoOptions} />
           <Route path={`/projects`} component={Projects} />
         </div>
      </Router>
      </div>
      )
  };
}

export default Header;

