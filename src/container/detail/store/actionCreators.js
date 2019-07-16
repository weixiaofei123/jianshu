import $ from 'jquery'
const changeDetail=(detail)=>{
		return{
			type:"changeDetail",
			detailData:detail
		}
}

export const detailData=(id)=>{
	return (dispatch)=>{
		$.getJSON("/public/api/detail.js",{id:id},function(res){
				const detail=res;
				console.log(detail)
				dispatch(changeDetail(detail))
		})
	}
}