import React from 'react'
import './style.css'

export default class ReadMore extends React.Component{
	render(){
		return(<div className="readMore" onClick={this.clickt.bind(this)}>
					<div>
						阅读更多
					</div>
			</div>);
	}

	// componentDidMount(){
	// 	console.log(this.props)
	// }

	clickt(){
		// console.log(this)
		this.props.clickR()
	}
}
