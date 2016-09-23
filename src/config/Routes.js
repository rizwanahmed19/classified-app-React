import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import PostAd from '../components/PostAd';
import Account from '../components/Account';	 


var Routes = React.createClass({
	getInitialState: function(){
		return ({
				loggedIn: sessionStorage.getItem('user') ? true : false
			}
		);
	},
	homeState: function(val){
		this.setState({
			loggedIn: val
		});
	},
	render: function(){
		return (
			<Router history={hashHistory}>
				<Route path='/' homeState={this.homeState} component={Main} >
					<IndexRoute newState={this.state.loggedIn} homeState={this.homeState} component={Home} />
					<Route path='postAd' component={PostAd} />
					<Route path='myAccount' component={Account} />
				</Route> 
			</Router>
		);	
	}
});

export default Routes;