import React from 'react'
import Header from '../component/Header/Header.jsx'
import '../static/public.css'
import Show from '../component/Show/Show.jsx'
import View from '../component/View/index.jsx'
import Tag from '../component/Tag/index.jsx'
import Recommend from '../component/Recommend/index.jsx'
import './style.css'




export default class Home extends React.Component{
	render(){

		return(
				<div className="container">
					<Header />
					
					


					<Show />
					<View />
					
					<Tag />
					<Recommend history={this.props.history}/>

				</div>
			);
	}
}