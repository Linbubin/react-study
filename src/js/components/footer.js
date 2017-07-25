import React from 'react';
import ReactDom from 'react-dom';

var footerCss = require('../../css/footer.css');

export default class ComponentFooter extends React.Component{
	componentsDidMount(){
		console.log('footer');
	}
	render(){
		console.log(footerCss);
		return(
			<footer class={footerCss.miniFooter}>
				<h1>这里是页脚，一般放置版权信息</h1>
			</footer>
		)
	}
}