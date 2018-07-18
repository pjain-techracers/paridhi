import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import { Route} from 'react-router'
import repos from './repos'
import OtherUserRepos from './otheruserRepos'
import CreateRepo from './createRepo'
import RemoveRepo from './removeRepo'
 export default class RepoList extends Component {
  render() {
    return (
      <div>

        <ul >
          <li>
            <Link to={`${this.props.match.url}/create`} className='btn btn-primary' >Create other repository</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/delete`} className='btn btn-default'>Remove existing repository</Link>
          </li>
          <li>
            <Link exact to={`${this.props.match.url}/list`} className='btn btn-default'>List your repository</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/others`} className='btn btn-default'>List other repository</Link>
          </li>
        </ul>

        <Route exact path={`${this.props.match.url}/list`} component={repos} />
        <Route exact path={`${this.props.match.url}/others`} component={OtherUserRepos} />
        <Route exact path={`${this.props.match.url}/create`} component={CreateRepo} />
        <Route exact path={`${this.props.match.url}/delete`} component={RemoveRepo} />

      </div>
    )
  }
 }