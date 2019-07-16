import * as constants from './constants.js'
const stateDefault={
		focus:false,
		bound:false,
		data:[],
		page:0,
		totalPage:0
}

export default (state=stateDefault,action)=>{
	if (action.type==constants.FOCUSTRUE) {
		const newState=JSON.parse(JSON.stringify(state));
		newState.focus=action.focus;
		return newState;
	}
	if (action.type==constants.FOCUSFALSE) {
		const newState=JSON.parse(JSON.stringify(state));
		newState.focus=action.focus;
		return newState;
	}
	if (action.type==constants.BOUNDTRUE) {
		const newState=JSON.parse(JSON.stringify(state));
		newState.bound=action.bound;
		return newState;
	}
	if (action.type==constants.BOUNDFALSE) {
		const newState=JSON.parse(JSON.stringify(state));
		newState.bound=action.bound;
		return newState;
	}
	if (action.type==constants.CHANGELIST) {
		const newState=JSON.parse(JSON.stringify(state));
		newState.data=action.data;
		newState.totalPage=action.totalPage;
		return newState;
	}
	if (action.type==constants.CHANGEPAGE) {
		const newState=JSON.parse(JSON.stringify(state));
		newState.page=action.page;
		return newState;
	}
	return state;
}