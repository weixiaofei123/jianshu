const stateDefault={
	scanState:false
}

export default (state=stateDefault,action)=>{
	if (action.type=="scanState") {
	const newState=JSON.parse(JSON.stringify(state));
	newState.scanState=action.scanState;
	return newState;
	}
		return state;
}