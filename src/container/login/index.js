import React from 'react'
import './style.css'
import Header from '../../component/Header/Header.jsx'
import Store from '../Store/Store.js'
import { connect }from 'react-redux'
import * as actionCreators from './store/actionCreators.js'
import '../../static/font_84owolbwusk/iconfont.css'
import { Link }from 'react-router-dom'


class Login extends React.Component{
	render(){
		return(	<div className="login_bg">
					<Header />
					<div className="login">
						<div>
							<span>登录</span>
							<span>.</span>      
							<span><Link to='/register'>注册</Link></span>
						</div>
						<div>
							<span className="iconfont icon-zhanghao-copy"></span>
							 <input ref="name" type="text" placeholder="手机号码或邮箱" 
							 onChange={(e)=>{this.props.handelUsername(e)}} value={this.props.userName}/>
							<span className="iconfont icon-mima" id="xxxx"></span>
							<input ref="password" type="text" placeholder="密码" 
							onChange={(e)=>{this.props.handelPassword(e)}} value={this.props.password}/>
						</div>
						<div>
							<input ref="input" type="checkbox" /> <span>记住我</span> <span>登录遇到问题</span>
						</div>
						<div onClick={()=>{this.props.submit(this.refs.name.value,this.refs.password.value)}}>
							登录
						</div>
						<div>
							<div>——— 社交账号登录———</div>
							<div>
								<span className="iconfont icon-weibo"></span>
								<a href="https://open.weixin.qq.com/connect/qrconnect?appid=wxbdc5610cc59c1631&redirect_uri=https%3A%2F%2Fpassport.yhd.com%2Fwechat%2Fcallback.do&response_type=code&scope=snsapi_login&state=3d6be0a4035d839573b04816624a415e#wechat_redirect"> <span className="iconfont icon-weixin"></span></a>
								<a href="https://graph.qq.com/oauth2.0/authorize?client_id=1109486735
								&redirect_uri=blog.hudong51.cn/login/authorization/callback/qq&response_type=code&state=1&scope=get_user_info,list_album,upload_pic,do_like"><span className="iconfont icon-QQ"></span></a>
							</div>
						</div>
					</div>
				</div>
			);
	}

	componentWillMount(){
		if (Cookies.get("userName")&&Cookies.get("password")) {
			this.props.saveCookies(Cookies.get("userName"),Cookies.get("password"))
		}
	}



	componentDidUpdate(){
	if (this.props.loginData.judge==1) {
		this.props.history.push("/");
		this.props.loginState(true);
		if (this.refs.input.checked) {
			Cookies.set("userName",this.refs.name.value,{ expires:7 })
		Cookies.set("password",this.refs.password.value,{ expires:7 })
		}
		
	}else if(this.props.loginData.judge==0){
		alert("name or password wrong");
	}
	}
}

const mapStateToProps=(state)=>{
	return{
	loginData:state.Login.loginData,
	userName:state.Login.userName,
	password:state.Login.password

	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		submit(name,password){
			// console.log(name,password)
			dispatch(actionCreators.submit(name,password))
		},
		loginState(value){
			dispatch(actionCreators.loginState(value))
		},
		saveCookies(userName,password){
			dispatch(actionCreators.saveCookies(userName,password))
		},
		handelUsername(e){
			// console.log(e.target)
			
				const userName=e.target.value;
					console.log(e.target.value)
				dispatch(actionCreators.userName(userName))
			
		},
		handelPassword(e){
			
				const password=e.target.value;
				dispatch(actionCreators.password(password))
			
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)