import $ from 'jquery'

const login=(loginData)=>{
	return{
		type:"loginData",
		loginData:loginData
	}
}

export const loginState=(value)=>{
	return{
		type:"loginState",
		loginState:value
	}
}

export const saveCookies=(userName,password)=>{
	return{
		type:"saveCookies",
		userName:userName,
		password:password
	}
}

export const userName=(userName)=>{
	return{
		type:"userName",
		userName:userName
		
	}
}

export const password=(password)=>{
	return{
		type:"password",
		password:password
		
	}
}


export const submit=(name,password)=>{
	return (dispatch)=>{
		// console.log(name,password)
		$.getJSON("/public/api/login.js",{name:name,password:password},function(res){
			const loginData=res;
			console.log(loginData)
			dispatch(login(loginData))
		})
	}
}