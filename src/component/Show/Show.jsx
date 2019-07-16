import React from 'react'
import './style.css'


export default class Show extends React.Component{
	render(){
		return(
				<div className="show">
					<ul>
						<li>
							<a href="">
								<img src={require("../../images/1.jpg")} alt=""/>
								<span>故事</span>
							</a>
							
						</li>
						<li>
							<a href="">
							<img src={require("../../images/2.jpg")} alt=""/>
							<span>旅行.在路上</span></a>
						</li>
						<li>
							<a href=""><img src={require("../../images/3.jpg")} alt=""/>
							<span>@IT.互联网</span></a>
						</li>
						<li>
							<a href=""><img src={require("../../images/4.jpg")} alt=""/>
							<span>手绘</span></a>
						</li>
						<li>
							<a href=""><img src={require("../../images/5.jpg")} alt=""/>
							<span>读书</span></a>
						</li>
						<li>
							<a href=""><img src={require("../../images/6.jpg")} alt=""/>
							<span>历史</span></a>
						</li>
						<li>
							<a href=""><img src={require("../../images/8.jpg")} alt=""/>
							<span>简书电影</span></a>
						</li>
					</ul>
					<a href=""><span>更多热门专题></span></a>
					
				</div>
			);
	}
}