import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Options from './options'

class Header extends Component {
  render() {
    return (
      <div className='header text-center'>
        <nav className="navbar navbar-default">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <Link to ='/' className="navbar-brand">GIT</Link>
                  </div>
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">
                       <li><Link to="/repos"  > Repository</Link></li>
                       <li><Link to="/projects" > Projects</Link></li>
                       <li><Link to="/emp"> Employees</Link></li>
                       <li><Link to="/pulls"> Pull Requests</Link></li>
                       <li><Link to="/commits"> Commits</Link></li>
                      </ul>
                  </div>
              </div>
          </nav>
            { this.props.children }
        </div>
      )
  };
}

export default Header;

