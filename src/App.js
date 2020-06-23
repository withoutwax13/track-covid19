import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import history from './pages/history'
import Header from './components/header'
import Menu from './components/menu'
import Home from './components/main'

const App = () => {
	return (
		<div >
			<Header/>
			<Menu/>
			<Router history={history}>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route exact path='/about'/>
					<Route exact path='/global-stats'/>
					<Route component={Home}/>
				</Switch>
			</Router>
		</div>
	)
}

export default App