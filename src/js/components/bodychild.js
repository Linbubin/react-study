import React from 'react';

export default class BodyChild extends React.Component {
  render() {
    return (
      <div>
      	<p>BodyChild {this.props.userid}</p>
      	<p>子页面输入：
      		<input type="text" onChange={this.props.handleChildValueChange}/>
      	</p>
      </div>
    );
  }
}
