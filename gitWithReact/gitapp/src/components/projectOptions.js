import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import { Route} from 'react-router'
import repos from './repos'
import MapProjectEmp from './mapEmpProject'
import MapRepoProject from './mapRepoProject'
import CreateProject from './createProject'
import RemoveProject from './removeProject'
 export default class RepoList extends Component {
  render() {
    return (
      <div>
        <ul >
          <li>
            <Link to={`${this.props.match.url}/create`} className='btn btn-default' >Create other project</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/delete`} className='btn btn-default'>Remove existing project</Link>
          </li>
          <li>
            <Link exact to={`${this.props.match.url}/emp/project`} className='btn btn-default'>Add employees in project</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/repo/project`} className='btn btn-default'>Add repository to projects</Link>
          </li>
        </ul>

        <Route exact path={`${this.props.match.url}/create`} component={CreateProject} />
        <Route exact path={`${this.props.match.url}/delete`} component={RemoveProject} />
        <Route exact path={`${this.props.match.url}/emp/project`} component={MapProjectEmp} />
        <Route exact path={`${this.props.match.url}/repo/project`} component={MapRepoProject} />

      </div>
    )
  }
 }