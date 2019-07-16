import React from 'react'
import './style.css'
import { connect } from 'react-redux'
import Store from '../../container/Store/Store.js'
import * as actionCreators from './store/actionCreators.js'

class Tag extends React.Component{
	render(){
		return(
				<div className="Tag">
					<div className="Tag_word">
						<ul>
							<li>7日热门></li>
							<li>30日热门></li>
							<li>优选连载></li>
							<li>简书版权></li>
							<li>简书大学堂></li>
						</ul>
					</div>
					<div className="Tag_app" onMouseOver={()=>{this.props.handelTag(true)}} onMouseOut={()=>{this.props.handelTag(false)}}>
						<img src={require("../../images/10.jpg")} alt="" />
						<div>
							<span >下载简书手机app></span><br/>
							<span >随时随地发现和创作内容</span>
							{
								this.props.scanState?
							<div className="tag_scan">
								<img src={require("../../images/15.jpg")} alt="" />
								<div></div>
							</div>:null
							
							}
							
						</div>
					</div>
				</div>
			);
	}
}

const mapStateToProps=(state)=>{
	return{
		scanState:state.Tag.scanState
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		handelTag(value){
			dispatch(actionCreators.handelTag(value))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Tag)