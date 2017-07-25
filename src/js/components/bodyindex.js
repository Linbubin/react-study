import React from 'react';
import ReactDom from 'react-dom';
import BodyChild from './bodychild';

import ReactMixin from 'react-mixin';
import MaxinLog from './mixins';

export default class BodyIndex extends React.Component{
	constructor(){
		super();
		this.state = {username : "Parry", age : 20};
	}

	changeUserInfo(){
		this.setState({age : 50});
		MaxinLog.log();
	}

	handleChildValueChange(event){
		this.setState({age : event.target.value})
	}
	componentsDidMount(){
		console.log('body');
	}

	render(){
		return(
			<div>
				<h2>页面的主题内容</h2>
				<p>{this.state.age}</p>
				<p>{this.props.userid}</p>
				<input type="button" value="提交" onClick={this.changeUserInfo.bind(this)} />
				<BodyChild {...this.props} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
			</div>
		)
	}
}


BodyIndex.propTypes = {
	userid : React.PropTypes.number
};

ReactMixin(BodyIndex.propTypes, MaxinLog);