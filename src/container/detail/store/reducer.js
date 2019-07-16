const stateDefault={
		detailData:[]
}
export default (state=stateDefault,action)=>{
	if (action.type=="changeDetail") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.detailData=action.detailData;
		return newState;
	}
	return state;
}