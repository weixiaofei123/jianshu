import React from 'react'
import { HashRouter,Route,Switch } from 'react-router-dom'
import Home from '../home.jsx'
import Detail from '../detail/index.js'
import Login from '../login/index.js'
import Register from '../register/index.jsx'
import Recommendation from '../../container/recommendation/index.jsx'
import Author from '../author/index.jsx'

export default class App extends React.Component{
	render(){
		return(
				<HashRouter>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/detail/:id' component={Detail} />
						<Route path='/login' component={Login} />
						<Route path='/register' component={Register} />
						<Route path='/recommendation' component={Recommendation} />
						<Route path='/author/:id' component={Author} />
					</Switch>
			    </HashRouter>
			);
	}
}