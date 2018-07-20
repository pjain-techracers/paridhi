import React from 'react'
import repos from '../components/repos'
import OtherUserRepos from '../components/otheruserRepos'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from '../App.js'
import Options from '../components/options'
import CreatePage from '../components/createPage'
import Repos from '../components/repos'

const Routes = (props) => (
  <Router >
  	<div>
		  <Route render = { (props) => <App {...props} /> }/>
				<Route path = { `/repos` } render = { (props) => <Repos locate={`repos`} {...props} /> } >
        	<Route path={`/create`} render={(props) => <CreatePage locate={this.props.locate} {...props} /> }/>
        </Route>
		    <Route path = { `/emp` }  render = { (props) => <Options locate={`employees`} {...props} /> } />
		    <Route path = { `/projects` }  render = { (props) => <Options locate={`projects`} {...props} /> } />
		    <Route path = { `/pulls` }  render = { (props) => <Options locate={`pulls`} {...props} /> } />
		    <Route path = { `/commits` }  render = { (props) => <Options locate={`commits`} {...props} /> } />			

		</div>
  </Router>

)

export default Routes