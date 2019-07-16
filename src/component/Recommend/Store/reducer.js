const stateDefault={
	recomData:[],
	page:0
}

export default (state=stateDefault,action)=>{
	if (action.type=="recomData") {
		    const newState=JSON.parse(JSON.stringify(state));
		    newState.recomData=action.recomData;
		    return newState;
	}
		if (action.type=="getPage") {
		    const newState=JSON.parse(JSON.stringify(state));
		    newState.page=action.page;
		    return newState;
	}
		return state;
}