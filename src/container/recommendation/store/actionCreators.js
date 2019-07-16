import $ from 'jquery'

const recommendation=(recommendationRes)=>{
	return{
		type:"recommendation",
		recommendationRes:recommendationRes
	}
}

const loadData=(loadMoreData)=>{
	return{
		type:"loadMore",
		loadMoreData:loadMoreData
	}
}
export const getRecom=()=>{
	return(dispatch)=>{
			$.getJSON('/public/api/recommendation.js',function(res){
			const recommendationRes=res;
			dispatch(recommendation(recommendationRes))
		})
	}
}

export const loadMore=()=>{
	return(dispatch)=>{
		$.getJSON('/public/api/recommendation.js',function(res){
			const loadMoreData=res;
			// console.log(loadMoreData)
			dispatch(loadData(loadMoreData));
		})
	}
}

export const increase=(list)=>{
	return{
		type:"increase",
		increaseData:list,
		increaseLoad:[]
	}
}

export const guanzhu=()=>{
	return{
		type:"guanzhu",
		guanzhuChange:true
	}
}