import React from 'react'
import Header from '../../component/Header/Header.jsx'
import { connect } from 'react-redux'
import Store from '../detail/store/reducer.js'
import * as actionCreators from './store/actionCreators.js'
import './style.css'

class Detail extends React.Component{
	render(){
		
		return (
				<div>
					<Header />
					{
						this.props.detailData.length>0?
					<div>
						<div className="detail_img" style={{background:"url("+this.props.detailData[0].imgURL+")",
							backgroundSize:"100% 100%"
							}}>
						</div>
						<div className="detail_comment">
						{this.props.detailData[0].comment}
						</div>
					</div>:"loading"
					}
				</div>
			);
	}

	componentDidMount(){
		this.props.getDetail(this.props.match.params.id)
	}
}

const mapStateToProps=(state)=>{
	// console.log(state.Detail.detailData)
		return{
			detailData:state.Detail.detailData
		}
}

const mapDispatchToProps=(dispatch)=>{
		return{
			getDetail(id){
				dispatch(actionCreators.detailData(id))
			}
		}
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail)