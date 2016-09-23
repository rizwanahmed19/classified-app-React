import React from 'react';
import {browserHistory, Link} from 'react-router';
import Nav from './Nav'
import Signup from './Signup';
import Login from './Login';
import Categories from './Categories';


var Home = React.createClass({
	getInitialState: function(){
		console.log(this.props)
		return {
			loggedIn: this.props.route.newState //sessionStorage.getItem('user') ? true : false
		}
	},
	// handleState: function(val){
	// 	this.setState({
	// 		loggedIn: val
	// 	});
	// },
	componentDidMount: function(){
		
	},
	render: function(){
		return (
			<div>
				<div className="jumbotron">
					<div className='container-fluid text-center headline'>
						<div className='col-sm-12'>
							<h1>Start selling <span>now!!</span></h1>
							{
								this.state.loggedIn ?
									<Link to='/postAd' className='btn btn-warning btn-lg headline-btn' >Submit an ad</Link> :		
									<Link to='/' className='btn btn-warning btn-lg headline-btn' >Submit an ad</Link> 
							}
						</div>
					</div>
				</div>
				<div className='container-fluid'>
					<Categories />
				</div>
				{
						this.state.loggedIn ?
						<div className='col-sm-12 logged-in text-center'>
							<h1>You are logged in</h1>
						</div> :
						<div className='container-fluid text-center signup-login' id='signup-login'>
							<div className='col-sm-4 login-col'>
								<Login onFormSubmit={this.props.route.homeState}/>
							</div>
							<div className='col-sm-8 signup-col'>
								<Signup onFormSubmit={this.props.route.homeState}/>
							</div>
						</div>
				}
			</div>
		);
	}
});
export default Home;