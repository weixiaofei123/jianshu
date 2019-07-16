import React from 'react'
import './style.css'
import Header from '../../component/Header/Header.jsx'
import '../../static/font_84owolbwusk/iconfont.css'
import { connect } from 'react-redux'
import Store from '../Store/Store.js'
import * as actionCreators from './store/actionCreators.js'
import { Link } from 'react-router-dom'



class Register extends React.Component{
	render(){
		return(	<div className="register_bg">
					<Header />
					<div className="register">
						<div>
							<span><Link to="/login">登录</Link></span>
							<span>.</span>      
							<span>注册</span>
						</div>
						<div>
							<span className="iconfont icon-zhanghao-copy"></span>
							 <input ref="name" type="text" placeholder="用户名或邮箱" onFocus={this.props.handelFocus}
							 onBlur={(e)=>{this.props.handelBlur(e)}} />
							 <span className="iconfont icon-zhanghao-copy icon-zhanghao"></span>
							 <input ref="password" type="text" placeholder="密码" 
							 onChange={(e)=>{this.props.handelUsername(e)}} value={this.props.userName}/>
							 <span className="iconfont icon-zhanghao-copy"></span>
							 <input ref="phone" type="text" placeholder="手机号码" />
							<span className="iconfont icon-mima" id="xxx"></span>
							<input ref="password" type="text" placeholder="再输入密码" 
							onChange={(e)=>{this.props.handelPassword(e)}} value={this.props.password}/>
							{
								this.props.counts>0?
								<div className="verify">重新发送{this.props.counts}</div>:
								<div className="verify" ref="verify" onClick={()=>{this.props.handelVerify(this.refs.verify,this.refs.phone.value)}}>发送验证码</div>
							}
							
							{
								this.props.res.judge&&(!this.props.focus)?
								<div className="verify_user">
									<div></div>
									<span>昵称已经被用，换一个吧</span>
								</div>:null
							}
						</div>
						
						<div onClick={()=>{this.props.submit(this.refs.name.value,this.refs.password.value,this.props.phone)}}>
							注册
						</div>
						<div>
							<div>点击”注册“即表示您同意并愿意准守</div>
							
						</div>
						{
							this.props.success?
						<div className="slider">
							<div>
								<div className="slider_left" style={{
									left:this.props.targetX,backgroundColor:"red",textAlign:"center",lineHeight:"50px"
								}}>ok</div>
								<div className="target" ref="target"></div>
							</div>
						</div>:
						<div className="slider">
							<div ref="frame">
								<div className="slider_left" style={{
									left:this.props.distance
								}} onMouseDown={(e)=>{this.props.handelMousedown(e,this.refs.target.offsetLeft,this.refs.frame)}}></div>
								<div className="target" ref="target"></div>
							</div>
						</div>
						}
						
					</div>
				</div>
			);
	}
}

const mapStateToProps=(state)=>{
		return{
		res:state.Register.res,
		focus:state.Register.focus,
		counts:state.Register.counts,
		distance:state.Register.distance,
		success:state.Register.success,
		targetX:state.Register.targetX
		}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		handelBlur(e){
			// console.log(e.target.value)
			dispatch(actionCreators.getUser(e.target.value));
			dispatch(actionCreators.focus(false))
		},
		handelFocus(){
		dispatch(actionCreators.focus(true));
		},
		handelVerify(that,phone){

		dispatch(actionCreators.verifyCounts(that,phone));
		},
		handelMousedown(e,targetX,frame){
			const x=e.clientX;
			// console.log(x)
			document.onmousemove=function(event){
				const moveX=event.clientX;
				var distance=moveX-x;
				if (distance<=0) {
					distance=0;
				}else if(distance>targetX+2){
					distance=0;
				}
				// console.log(distance)
				dispatch(actionCreators.move(distance))
			}

			document.onmouseup=function(e){
				document.onmousemove=null;
			console.log("here")
			const x=e.target.getBoundingClientRect().left;
			// console.log(targetX)
			// console.log(ele.getBoundingClientRect().left)
			const origin=frame.getBoundingClientRect().left;
			const  distance=x-origin;
			// console.log(targetX)
			// console.log(distance)
			if (distance<=targetX+1&&distance>=targetX-1) {
				dispatch(actionCreators.successM(targetX))
			}else{
				const distance=0;
				dispatch(actionCreators.move(distance))
			}
			}
		},
		submit(name,password,phone){
			dispatch(actionCreators.register(name,password,phone))
		}
	

	}

	
	
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)