import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from '../App.js'
import ListRepo from '../components/ListRepo'
import ListProject from '../components/ListProject'
import ListEmp from '../components/ListEmp'

const Routes = (props) => (
  <Router>
  	<div>
	  <Route render = { (props) => <App {...props} /> } />
		<Route path = { `/repos` } render = { (props) => <ListRepo locate = {`repos`} {...props} /> } />
    	<Route path = { `/emp` }  render = { (props) => <ListEmp locate = {`employees`} {...props} /> } />
	    <Route path = { `/projects` }  render = { (props) => <ListProject locate = {`projects`} {...props} /> } />
	</div>
  </Router>
)

export default Routes