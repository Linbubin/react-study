import React from 'react';
import {Row,
		Col, 
		Menu, 
		Icon, 
		Tabs, 
		message, 
		Form, 
		Input, 
		Button, 
		CheckBox,
		Modal} from 'antd';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MobileHeader extends React.Component{
	constructor(){
		super();
		this.state = {
			current: 'top',
			modalVisible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userid: 0,
		}
	}

	setModalVisible(value){
		this.setState({modalVisible: value})
	}

	handeleClick(e){
		if(e.key="register"){
			this.setState({current: 'register'});
			this.setModalVisible(true);
		}else{
			this.setState({current: e.key});
		}
	}

	handleSubmit(e){
		//页面开始向api提交数据的时候
		e.preventDefault();
		var myFetchOptions = {
			method: 'GET'
		};
		this.props.form.validateFields((err, formData) => {
      if (!err) {
      	fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName="+formData.r_userName+"&r_password="+formData.r_password+"&r_confirmPassword="+formData.r_confirmPassword,myFetchOptions).
      	then(response=>response.json()).then(json=>{
      		this.setState({userNickName: json.NickUserName,userid:json.UserId});
      	})
      	}
    	});
		message.success("请求成功！");
		this.setModalVisible(false);
	}
	login(){
		this.setModalVisible(true);
	}
	render(){
		let {getFieldDecorator} = this.props.form;
		const userShow = this.state.hasLogined?
		<Link>
			<Icon type="inbox" />
		</Link>
		:
		<Icon type="setting" onClick={this.login.bind(this)} />
		console.log(123);
		return(
			<div id="mobileheader">
				<header>
					<img src="./src/images/logo.png" alt="logo" />
					<span>ReactNews</span>
					{userShow}
				</header>
				<Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel = {()=>this.setModalVisible(false)}  onOk = {()=>this.setModalVisible(false)}  okText="关闭">
					<Tabs type="card">
						<TabPane tab="注册" key="2">
						<Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
							<FormItem label="账户">
							{getFieldDecorator('r_userName', {
				      })(
				        <Input placeholder="请输入您的账号" />
				      )}
							</FormItem>
							<FormItem label="密码">
								{getFieldDecorator('r_password', {
					      })(
					        <Input type="password" placeholder="请输入您的密码" />
					      )}
							</FormItem>
							<FormItem label="确认密码">
									{getFieldDecorator('r_confirmPassword', {
						      })(
						        <Input type="password" placeholder="请确认密码" />
						      )}
							</FormItem>
							<Button type="primary" htmlType="submit">注册</Button>
						</Form>
						</TabPane>
					</Tabs>
				</Modal>
			</div>
		)
	}
}

export default MobileHeader = Form.create({})(MobileHeader);