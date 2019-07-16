import React from 'react'
import './style.css'
import { connect } from 'react-redux'
import store from './Store/reducer.js'
import { Link }from 'react-router-dom'

import $ from 'jquery'
import * as actionCreators from '../Recommend/Store/actionCreators.js'

class Recommend extends React.Component{
	render(){

			const list=[];
			if (this.props.recomData.length>0) {
				// console.log(this.props.recomData)
				for (var i = this.props.page*3; i<(this.props.page+1)*3; i++) {
					list.push(
							<div className="Recommend_down" onClick={()=>{this.props.handelAuthor(i,this.props.history)}}>
								<div className="Recommend_downf" style={{background:"url("+this.props.recomData[i].imgURL+")"}}></div>
									<div className="Recommend_downs">
										<span>{this.props.recomData[i].title}</span><br />
										<span>{this.props.recomData[i].name}</span>
									</div>
									<div onClick={(e)=>{this.props.handelClick(e,this.props,this.props.loginState)}} 
									 className="Recommend_downt">
										+关注

									</div>
							</div>
						)
				}
			}
				

		return(
				
				<div className="Recommend">
					<div className="Recommend_top">
						<span style={{float:"left"}}>推荐作者</span>
						<span className="Recommend_top_circle" onClick={()=>{this.props.handelCircle(this.refs.circle,this.props.recomData.length,this.props.page)}} style={{float:"right"}}><span ref="circle" className="iconfont icon-huanyipi"></span>换一换</span>
					</div>
					{
						list
					}
					<div className="RecommendAll">
						<Link to='/recommendation'><span>查看全部</span><span>></span></Link>
					</div>
				</div>
			);
	}


	componentDidMount(){
		const _this=this;
		$.getJSON("/public/api/Recommend.js",function(res){
			const RecomData=res;
			 // console.log(this)
			_this.props.getData(RecomData);
		})
	}
}

const mapStateToProps=(state)=>{
	return{
		recomData:state.Recommend.recomData,
		page:state.Recommend.page,
		loginState:state.Login.loginState
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		handelCircle(circle,recomData,page){
			// console.log(circle)
				const tr=getStyle(circle,"transform");

			   var values = tr.split('(')[1].split(')')[0].split(',');
			    var a = values[0];
			    var b = values[1];
			    var c = values[2];
			    var d = values[3];
			    var scale = Math.sqrt(a * a + b * b);
			    // console.log('Scale: ' + scale);
			    // arc sin, convert from radians to degrees, round
			    var sin = b / scale;
			    // next line works for 30deg but not 130deg (returns 50);
			    // var angle = Math.round(Math.asin(sin) * (180/Math.PI));
			    var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
			   // console.log('Rotate: ' + angle + 'deg');
			   circle.style.transform="rotate("+(angle+360)+"deg)";
			
				setTimeout(function(){
					circle.style.transform="rotate("+((angle+360)%360)+"deg)";
				},200);

				if (page>=Math.ceil(recomData/3)-1) {
					page=0
				}
				dispatch(actionCreators.getPage(page))
  		},
  		getData(recomData){
  			// console.log(actionCreators)
  			dispatch(actionCreators.getData(recomData))
  		},
  		handelClick(e,props,loginState){
			if (loginState) {
				// console.log(e.target)
				e.target.className="Recommend_downtchange";
			}else{
				// console.log(props)
				props.history.push("/login")
			}
  		},
  		handelAuthor(id,history){
			history.push(`/author/${id}`);
  		}
	}
}

function getStyle(obj,attr){
	if (obj.currentStyle) {
		return obj.currentStyle[attr]
	}else{
	
		return getComputedStyle(obj,null)[attr]
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Recommend)