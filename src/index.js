import React from 'react'
import ReactDOM from 'react-dom'
import App from './container/App/App.js'
import { Provider } from 'react-redux'
import Store from './container/Store/Store.js'

const Tpp=<Provider store={Store}>
				<App />
			</Provider>





ReactDOM.render(Tpp,document.getElementById("root"));