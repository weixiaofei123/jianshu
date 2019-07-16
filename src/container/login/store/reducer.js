const stateDefault={
		loginData:{},
		loginState:false,
		userName:"",
		password:""
}
export default (state=stateDefault,action)=>{
	if (action.type=="loginData") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.loginData=action.loginData;
		return newState;
	}
	if (action.type=="loginState") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.loginState=action.loginState;
		return newState;
	}
	if (action.type=="saveCookies") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.userName=action.userName;
		newState.password=action.password;
		return newState;
	}
		if (action.type=="userName") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.userName=action.userName;
	
		return newState;
	}
			if (action.type=="password") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.password=action.password;
	
		return newState;
	}
		return state;
}