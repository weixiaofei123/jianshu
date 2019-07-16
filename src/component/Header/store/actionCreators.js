import * as constants from './constants.js'
import $ from 'jquery'
export const focusTrue=()=>
	{
			return {type:constants.FOCUSTRUE,
			focus:true}
		};

export const focusFalse=()=>
	{
			return{type:constants.FOCUSFALSE,
						focus:false}
		};

export const boundTrue=()=>
{
			return{type:constants.BOUNDTRUE,
						bound:true}
		}

export const boundFalse=()=>
{
			return{type:constants.BOUNDFALSE,
						bound:false}
		}

export const ChangeList=(page)=>{
			return {
				type:constants.CHANGEPAGE,
				page:page
			}
}


const list=(data)=>{
	return{
		type:constants.CHANGELIST,
		data:data,
		totalPage:Math.ceil(data.length/8)
	}
}

export const getList=()=>{
	return (dispatch)=>{
		$.getJSON("/public/api/bound.js",function(res){
			const data=res;
			dispatch(list(data))
		})
	}
}