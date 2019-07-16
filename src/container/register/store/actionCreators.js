import $ from 'jquery'
const verify=(res)=>{
		return{
			type:"verify",
			res:res
		}
}

export const focus=(focus)=>{
	return{
		type:"focus",
		focus:focus
	}
}

const countN=(counts)=>{
		return{
			type:"counts",
			counts:counts
		}
}

export const verifyCounts=(that,phone)=>{
	return(dispatch)=>{
		console.log(phone)
		var counts=10;
		$.getJSON("/public/api/phone.js",{phone:phone},function(){

		})
		verify(that)
		function verify(that){
			if (counts==0) {
				that.removeAttribute("disabled");
				// that.value="发送验证码";
				// counts=60;
				dispatch(countN(counts))
				return false;
			}else{
				that.setAttribute("disabled",true);
				// that.value="重新发送"+counts;
				counts--;
				dispatch(countN(counts))
			}

			setTimeout(function(){
				
				verify(that);
			},1000)
		}
			
	}
}


export const move=(distance)=>{
		return{
			type:"distance",
			distance:distance
		}
}


export const getUser=(userName)=>{
	return
	(dispatch)=>{

		$.getJSON("/public/api/user.js",{userName:userName},function(res){
			const res1=res;
			console.log(res1)
			dispatch(verify(res1))
		})
	}
	
}

export const successM=(targetX)=>{
		return{
			type:"success",
			success:true,
			targetX:targetX

		}
}

export const register=(name,password,phone)=>{
		return(dispatch)=>{
			$.getJSON("/public/api/register.js",{name:name,password:password,phone:phone},function(res){
				const registerRes=res;
			})
		}
}