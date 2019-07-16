const stateDefault={

	recommendationRes:[],
	loadMoreData:[],
	guanzhuChange:false
}

export default (state=stateDefault,action)=>{
	    
	    if (action.type=='recommendation') {
	    	const newState=JSON.parse(JSON.stringify(state));
	    	newState.recommendationRes=action.recommendationRes;
	    	// console.log("here1")
	    	return newState;

	    }  
	      if (action.type=='loadMore') {
	      	// console.log("here")
	    	const newState=JSON.parse(JSON.stringify(state));
	    	newState.loadMoreData=action.loadMoreData;
	    	
	    	return newState;

	    }  
	       if (action.type=='increase') {
	      	// console.log("here")
	    	const newState=JSON.parse(JSON.stringify(state));
	    	newState.recommendationRes=action.increaseData;
	    	newState.loadMoreData=action.increaseLoad;
	    	return newState;

	    }  
	        if (action.type=='guanzhu') {
	      	// console.log("here")
	    	const newState=JSON.parse(JSON.stringify(state));
	    	newState.guanzhuChange=action.guanzhuChange;
	    	
	    	return newState;

	    }  
		return state;
}