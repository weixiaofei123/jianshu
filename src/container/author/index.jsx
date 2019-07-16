import React from 'react'
import Header from '../../component/Header/Header.jsx'
import './style.css'
import { connect }from 'react-redux'
import Store from '../Store/Store.js'
import * as actionCreators from './store/actionCreators.js'
import $ from 'jquery'
class Author extends React.Component{
	render(){
		// console.log(this.props.authorData[0])
		return(<div>
					<Header />
					{
							this.props.authorData.length>0?
					<div className="frame">
						
						<div className="basic">
							<div className="basicImg" style={{background:"url("+this.props.authorData[0].imgURL+")"}}></div>
							<div className="basicInfo">
								<div className="basicInfo_name">{this.props.authorData.name}</div>
								<div className="basicInfo_content">
									<div>
										<div>{this.props.authorData[0].guan}</div>
										<div>关注</div>
									</div>
									<div>
										<div>{this.props.authorData[0].fen}</div>
										<div>粉丝</div>
									</div>
									<div>
										<div>{this.props.authorData[0].wen}</div>
										<div>文章</div>
									</div>
									<div>
										<div>26</div>
										<div>字数</div>
									</div>
									<div>
										<div>26</div>
										<div>收获喜欢</div>
									</div>
									<div>
										<div>65</div>
										<div>简书砖</div>
									</div>
								</div>
							</div>
							<div className="basicAtte">
								<div>发简信</div>
								<div>关注</div>
							</div>
						</div>
						<div className="intro">
							<div className="intro_author">

								<div>简述版权</div>
								<div>简述签约作者</div>
								<div>简书会员</div>
							</div>
							<div className="intro_content">
								<h3>个人介绍</h3>
								<div>打马跃青山，长河扬其波 。 爱皎月清风，恋人间烟火</div>
								<div>文章均为原创。版权合作事宜请联系行距文化：pub@hangju-pub.com</div>
							</div>
							<div className="intro_atte">
								<div>她关注的专题/文集/连载</div>
								<div>她喜欢的文章</div>
							</div>
							<div className="intro_paper">
								<h3>他的文集</h3>
								<div>散文拾璎：屋檐下有森林 连载</div>
								<div>读写随谈：厚积落叶听雨声 连载</div>
								<div>随笔集</div>
								<div>钱小雅与钱小能的故事 连载</div>
							</div>
						</div>
						<div className="content">
							<div className="content_title">
								<span>文章</span>
								<span>动态</span>
								<span>最新评论</span>
								<span>热门</span>
							</div>
							<div className="content_content">
								<h2>{this.props.authorData[0].title}</h2>
								<div>（本文首发30万粉丝儿童成长大号“尖叫童年”） 1. 半个月前的周五，我去看望一个很熟悉的老人家。 寒暄之后，还未等我坐稳，老人就搬个凳子坐在我...</div>
								<div>
									<span>3.3</span>
									<span>221</span>
									<span>10</span>
									<span>29</span>
									<span>时间</span>
								</div>
							</div>
						</div>
					</div>:"loading"
					}
					
					
				</div>);
	}

	componentDidMount(){
		const id=this.props.match.params.id;
		const _this=this;
		$.getJSON("/public/api/author.js",{id:id},function(res){
			const authorRes=res;
			_this.props.author(authorRes);
		})
	}
}



const mapStateToProps=(state)=>{
	return{
		authorData:state.Author.authorData
	}
}


const mapDispatchToProps=(dispatch)=>{
	return{
		author(authorRes){
			dispatch(actionCreators.getAuthor(authorRes))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Author)