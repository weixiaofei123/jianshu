import * as constants from '../../View/Store/constants.js'
const stateDefault={
		viewData:[],
		readMore:[]
}

export default (state=stateDefault,action)=>{
	if (action.type==constants.VIEWDATA) {
		const newState=JSON.parse(JSON.stringify(state));
		newState.viewData=action.viewData;
		return newState;
	}
	if (action.type=='readMore') {
		const newState=JSON.parse(JSON.stringify(state));
		newState.readMore=action.readMore;
		return newState;
	}
		if (action.type=='newData') {
		const newState=JSON.parse(JSON.stringify(state));
		newState.viewData=action.newData;
		return newState;
	}
	return state;
}