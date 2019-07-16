import $ from 'jquery'
import * as constants from '../../View/Store/constants.js'
const viewList=(viewData)=>{
	return {
		type:constants.VIEWDATA,
		viewData:viewData
	}
}


export const view=()=>{
	return (dispatch)=>{
		$.getJSON('/public/api/view.js',function(res){
			const viewData=res;
			// console.log(viewData)
			dispatch(viewList(viewData))
		})
	}


}

const readMoreF=(readMore)=>{
	return{
		type:"readMore",
		readMore:readMore
	}
}

export const readMore=(viewData)=>{
	return (dispatch)=>{
		$.getJSON('/public/api/view.js',function(res){
			const readMore=res.concat(viewData);
			console.log(readMore)
			dispatch(viewList(readMore))
		})
	}
}


