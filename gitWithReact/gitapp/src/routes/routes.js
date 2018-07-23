import React from 'react'
import OtherUserRepos from '../components/otheruserRepos'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from '../App.js'
import Options from '../components/options'
import CreatePage from '../components/createPage'
import ListRepo from '../components/ListRepo'
import ListProject from '../components/listProject'
import ListEmp from '../components/ListEmp'

const Routes = (props) => (
  <Router >
  	<div>
		  <Route render = { (props) => <App {...props} /> }/>
				<Route path = { `/repos` } render = { (props) => <ListRepo locate={`repos`} {...props} /> }/ >
        <Route path={`/repos/create`} render={(props) => <CreatePage locate={`repos`} {...props} /> }/>
		    <Route path = { `/emp` }  render = { (props) => <ListEmp locate={`employees`} {...props} /> } />
		    <Route path = { `/projects` }  render = { (props) => <ListProject locate={`projects`} {...props} /> } />
		    <Route path = { `/repos/pulls` }  render = { (props) => <Options locate={`pulls`} {...props} /> } />
		    <Route path = { `/repos/commits` }  render = { (props) => <Options locate={`commits`} {...props} /> } />			

		</div>
  </Router>

)

export default Routes