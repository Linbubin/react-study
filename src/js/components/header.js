import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router';

export default class Header extends React.Component{
	constructor(){
		super();
		this.state = {
			miniHeader : false,
		};
	}

	switchHeader(){
		this.setState({
			miniHeader : !this.state.miniHeader,
		});
	}

	componentsDidMount(){
		console.log('header');
	}



	render(){
		const styleComponentHeader = {
			paddingTop: (this.state.miniHeader) ? "3px" : "15px",
			paddingBottom: (this.state.miniHeader) ? "3px" : "15px"
		};
		return(
			<header style={styleComponentHeader}>
				<h1>这里是头部</h1>
				<ul>
					<li><Link to={'/'}>首页</Link></li>
					<li><Link to={'/details'}>详情页</Link></li>
					<li><Link to={'/list/1234'}>列表页</Link></li>
				</ul>
			</header>
		)
	}
}