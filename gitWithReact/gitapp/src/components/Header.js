import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'


class Header extends Component {
  render() {
    return (
      <div className='header text-center'>
        <nav className="navbar navbar-default">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <Link to ='/' className="navbar-brand">GIT</Link>
                      <Link to="/repos"  className="navbar-brand"> Repository</Link>
                      <Link to="/projects" className="navbar-brand"> Projects</Link>
                      <Link to="/emp" className="navbar-brand"> Employees</Link>
                  </div>
              </div>
          </nav>
            { this.props.children }
        </div>
      )
  };
}

export default Header;

