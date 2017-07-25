var React = require('react');
var ReactDom = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyindex';

class Index extends React.Component{
	componentsDidMount(){
		console.log("index");
	}
	render(){
		return(
			<div>
				<ComponentHeader/>
				<BodyIndex 
					userid= {123}
				/>
				<ComponentFooter/>
			</div>
		)
	}
}