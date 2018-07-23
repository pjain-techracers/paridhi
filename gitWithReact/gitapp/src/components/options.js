import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Route} from 'react-router'
import List from './ListRepo'
import Details from './details'

import OtherUserRepos from './otheruserRepos'
import CreatePage from './createPage'
import RemovePage from './removePage'
import mapEmpProject from './mapEmpProject'
import mapRepoProject from './mapRepoProject'
import App from '../App'
 export default class Options extends Component {
  render() {
    return (
      <div>
        <ul >
          <li className={this.props.locate===('commits') ? 'hidden' : (this.props.locate==='pulls' ? 'hidden' : '')}>
            <Link to={`${this.props.match.url}/create`} className='btn btn-primary' >Create</Link>
          </li>
          <li className={this.props.locate===('commits') ? 'hidden' : (this.props.locate==='pulls' ? 'hidden' : '')}>
            <Link to={`${this.props.match.url}/delete`} className='btn btn-default'>Remove</Link>
          </li>
          <li className={(this.props.locate==='repos') ? '' : 'hidden'}>
            <Link to={`${this.props.match.url}/list`} className='btn btn-default'>List your repository </Link>
          </li>
          <li className={(this.props.locate==='repos') ? '' : 'hidden'}>
            <Link to={`${this.props.match.url}/others`} className='btn btn-default'>List other repo</Link>
          </li>
          <li className={(this.props.locate==='projects') ? '' : 'hidden'}>
            <Link to={`${this.props.match.url}/projects/emp`} className='btn btn-default'>Add employees in project</Link>
          </li>
          <li className={(this.props.locate==='projects') ? '' : 'hidden'}>
            <Link to={`${this.props.match.url}/projects/repos`} className='btn btn-default'>Add repository to projects</Link>
          </li>
          <li className={(this.props.locate!==('repos') ) ? '' : 'hidden'}>
            <Link to={`${this.props.match.url}/details`} className='btn btn-default'>Details</Link>
          </li>
        </ul>
        <button >  <Link to='/'> back to home </Link></button>
        <Route exact path={`/`} component={App} />
        <Route path={`${this.props.match.url}/details`} render = {(props) => <Details locate = {this.props.locate} {...props} /> } />
        <Route path={`${this.props.match.url}/list`} render={(props) => <RemovePage locate = {this.props.locate} {...props} /> }/>
        <Route path={`${this.props.match.url}/projects/emp`} component = { mapEmpProject }/>
        <Route path={`${this.props.match.url}/projects/repos`} component = { mapRepoProject }/>
         
        <Route  path={`${this.props.match.url}/others`} component={OtherUserRepos} />
        <Route path={`${this.props.match.url}/delete`} render={(props) => <RemovePage locate={this.props.locate} {...props} /> }/>

      </div>
    )
  }
 }