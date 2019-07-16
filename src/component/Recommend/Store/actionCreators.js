

export const getData=(recomData)=>{
	return {
		type:"recomData",
		recomData:recomData
	}
}

export const getPage=(page)=>{
	return{
		type:"getPage",
		page:page+1
	}
}