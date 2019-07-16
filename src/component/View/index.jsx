import React from 'react'
import './style.css'
import { connect } from 'react-redux'
import Store from '../../container/Store/Store.js'
import * as actionCreators from '../View/Store/actionCreators.js'
import { Link } from 'react-router-dom'
import ReadMore from '../readMore/index.jsx'

class View extends React.Component{
	render(){
		// console.log(this.props.viewData)
			
			const list=this.props.viewData.map(item=>{
				// console.log(item)
					
					return ( 
							<div>
								<div className="View">
								<Link to={`/detail/${item.id}`}>
									<div className="View_list">
										<div>
											<h3>{item.title}</h3>
											<p>{item.comment}</p>
											<span>{item.name}</span>
											<span>留言</span>
											<span>{item.liuyan}</span>
											<span>点赞</span>
											<span>{item.dianzan}</span>
											<span>加钱</span>
											<span>{item.jiaqian}</span>
										</div>
										<div style={{background:"url("+item.imgURL+")",
											backgroundSize:"100% 100%"
											}}>
										</div>
									</div>
								</Link>
									
								</div>
							</div>
						);
					});
		
  		
			return(
				<div className='totalView'>
					{
						list
					}
					<ReadMore className='readMore'  clickR={()=>{this.props.handelReadMore(this.props.viewData)}}/>
				</div>
				
			);
		
		
	}

	componentDidMount(){
		// console.log(this.props)
		this.props.view();
	}

	
}

const mapStateToProps=(state)=>{
	return {
		viewData:state.View.viewData,
		readMore:state.View.readMore

	}
	
}

const mapDispatchToProps=(dispatch)=>{
	return {
			view(){
				dispatch(actionCreators.view())
			},
			handelReadMore(viewData){
				dispatch(actionCreators.readMore(viewData))
			}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(View)