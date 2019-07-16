const stateDefault={
	res:{
		judge:false,
		focus:false

	},
		counts:"",
		distance:0,
		success:false,
		targetX:0
}

export default (state=stateDefault,action)=>{
	if (action.type=="verify") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.res=action.res;
		return newState;
	}
	if (action.type=="focus") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.focus=action.focus;
		return newState;
	}
		if (action.type=="counts") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.counts=action.counts;
		return newState;
	}
	if (action.type=="distance") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.distance=action.distance;
		return newState;
	}
	if (action.type=="success") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.success=action.success;
		console.log(action.success)
		newState.targetX=action.targetX;
		return newState;
	}
	return state;
}