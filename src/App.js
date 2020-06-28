import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import api from './api/api'
import { fetchDataSummary } from './redux/actions'

import Header from './components/header'
import Menu from './components/menu'

import history from './pages/history'
import Home from './pages/main'
import Dashboard from './pages/dashboard'
import About from './pages/about'

const App = ({fetchDataSummary}) => {

	React.useEffect(() => {
		async function fetchData(){
			await api.get(`summary`).then(response=>fetchDataSummary(response.data))
		}
		fetchData()
	}, [])

	return (
		<div >
			<Router history={history}>
				<Header/>
				<Menu/>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route exact path='/about' component={About}/>
					<Route exact path='/dashboard' component={Dashboard}/>
					<Route component={Home}/>
				</Switch>
			</Router>
		</div>
	)
}

export default connect(null, { fetchDataSummary })(App)