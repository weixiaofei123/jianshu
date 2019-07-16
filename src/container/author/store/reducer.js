const stateDefault={
	authorData:[]
}

export default (state=stateDefault,action)=>{
	if (action.type=='author') {
		const newState=JSON.parse(JSON.stringify(state));
		newState.authorData=action.authorData;
		return newState;
	}
		return state;
}