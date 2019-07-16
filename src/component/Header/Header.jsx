import React from 'react'
import './style.css'
import './iconfont.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import store from '../../container/Store/Store.js'
import * as actionCreators from '../Header/store/actionCreators.js'


class Header extends React.Component{

	render(){
				var list=[];
				for (var i = this.props.page*8;i<(this.props.page*8+8); i++){
					list.push(<div className="bound_item">{this.props.data[i]}</div>);
						}
			
		return(
				<div className="Header">
					
						<div>
							<span>简书</span>
						</div>
						<div className="Header_search">
							<span>首页</span>
							<span>下载app</span>
							<div className="Header_searchIn">
								
       							       <input placeholder="搜索" className={this.props.focus?"long":"short"} 
									type="text" onFocus={()=>{this.props.handleInputFocus(this.props.data)}}
									onBlur={this.props.handleInputBlur}/>
       							 
								
								<div className={this.props.bound||this.props.focus?"bound":"hide"} onMouseEnter={this.props.handelBoundEnter}
									onMouseLeave={this.props.handelBoundLeave}>
									<div className="triangle"></div>
									<div className="bound_title">
										<span>热门搜索</span>
										<span onClick={()=>{this.props.circle(this.refs.circle)}}><span ref="circle" className="iconfont icon-huanyipi circle"></span>
										<span onClick={()=>{this.props.handleChangeList(this.props.page,this.props.totalPage)}}>换一批</span></span>
									</div>
								
									{
										list
									}
															
									</div>
							</div>
						</div>
						<div>
							<span>Aa</span>
							<span>
								{	
									this.props.loginState?
									<div>
										<img src="" alt="" /><span>wo</span>
									</div>:
									<div>
										<Link to='/login'>登陆</Link>
									<Link className="registerT" to="/register">注册</Link>
									</div>
									
								}
							</span>
							
							<span>写文章</span>
						</div>
					
				</div>
			);
	}


	
}

const mapStateToProps=(state)=>{
	return{
		bound:state.Header.bound,
		focus:state.Header.focus,
		data:state.Header.data,
		page:state.Header.page,
		totalPage:state.Header.totalPage,
		loginState:state.Login.loginState
	}
}


const mapDispatchToProps=(dispatch)=>{
	return{
		handleInputFocus(data){
		if (data.length==0) {
			dispatch(actionCreators.getList())
		}
		
		dispatch(actionCreators.focusTrue());
	},

	handleInputBlur(){
		
		dispatch(actionCreators.focusFalse())
	},

	handelBoundEnter(){
		
		dispatch(actionCreators.boundTrue())
	},

	handelBoundLeave(){
		dispatch(actionCreators.boundFalse())
	},

	circle(circle){
		// circle.style.transform="rotate(360deg)";
		const origin=circle.style.transform.replace(/[^0-9]/g,"");
		console.log(circle.style.transform)
		circle.style.transform="rotate("+360*(origin+1)+"deg)";
		},
	handleChangeList(page,totalPage){
		if (page<totalPage-1) {
			page+=1;
		}else{
			page=0;
		}
		dispatch(actionCreators.ChangeList(page))
	}

	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)



				// for (i = 0;i<8; i++) 
										
				// 							return (<div className="bound_item">{this.props.data[i]}</div>);						
				// 					}