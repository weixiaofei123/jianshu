import React from 'react'
import Header from '../../component/Header/Header.jsx'
import $ from 'jquery'
import { connect }from 'react-redux'
import Store from '../Store/Store.js'
import * as actionCreators from './store/actionCreators.js'
import './style.css'

class Recommendation extends React.Component{
	render(){
		if (this.props.recommend) {
			var list=this.props.recommend;
			if (this.props.loadMoreData.length>0) {
				// console.log(this.props.loadMoreData)
				list=list.concat(this.props.loadMoreData);
				this.props.increase(list);
			}
		var list=list.map(item=>{
								return(
									<div className="recom">
										<div onClick={()=>{this.props.handelAuthor(this.props.history,item.id)}} className="recomImg" style={{background:"url("+item.imgURL+")",backgroundSize:"100% 100%"}}></div>
										<div className="recomName">{item.name}</div>
										
											<div className="recomGuanzhu" onClick={(e)=>{this.props.handelGuanzhu(e,this.props.loginState,this.props.history)}}>+关注</div>
										
										
										<div className="recomUpdate">最近更新————————</div>
										<div className="recomTitle">{item.title}</div>
									</div>
								);
							});
		}else{
			var list="loading"
		}
		

		return (<div className='frameT'>
					<Header />
					<div>推荐作者</div>
					<div className="beforLoad">
						{
							list
						}
					</div>
					<div className='loadMore' onClick={this.props.loadMore}>加载更多</div>
				</div>);
	}

	componentDidMount(){
	
		this.props.getRecommendation();
	}

	
}

const mapStateToProps=(state)=>{
		return {
	recommend:state.Recommendation.recommendationRes,
	loadMoreData:state.Recommendation.loadMoreData,
	loginState:state.Login.loginState,
	guanzhuChange:state.Recommendation.guanzhuChange

		}
}

const mapDispatchToProps=(dispatch)=>{
		return{
			getRecommendation(){
				dispatch(actionCreators.getRecom())
			},
			loadMore(){
				
				dispatch(actionCreators.loadMore())
			},
			increase(list){
				dispatch(actionCreators.increase(list))
			},
			handelGuanzhu(e,loginState,history){
				if (loginState) {
					if (e.target.className=="recomGuanzhu") {
						e.target.className="guanzhuChange"
					}else{
						e.target.className="recomGuanzhu"
					}
					
				}else{
					history.push("/login")
				}
			},
			handelAuthor(history,id){
				history.push(`/author/${id}`)
			}
		}
}

export default connect(mapStateToProps,mapDispatchToProps)(Recommendation)