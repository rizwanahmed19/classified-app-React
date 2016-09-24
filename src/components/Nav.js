import React from 'react';
import {Link} from 'react-router';

var Nav = React.createClass({
	getInitialState: function(){
		return {
			logged: this.props.loggedIn
		}
	},
	scrollDown: function(){
		window.scrollTo(0, document.body.scrollHeight);
	},
	logOut: function(){
		sessionStorage.clear();
		this.props.handleState(false);
		window.location.replace('/', '');
	},
	render: function(){
		return (
			<div>
				<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
					<div className="container">

						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#">Classified App</a>
						</div>
				
						<div className="collapse navbar-collapse navbar-ex1-collapse">
							<ul className="nav navbar-nav navbar-right">
							{
								sessionStorage.getItem('user') ?
									<div className='loggedIn-btn'>
										<Link to='/myAccount' className='btn btn-success navbar-btn'>My Account</Link>
										<button onClick={this.logOut} className='btn btn-danger navbar-btn'>Log out</button>
									</div> :
									<button onClick={this.scrollDown} className='btn btn-primary navbar-btn'>Login/Sign up</button>
								}
							}
								<li>
									<form className="navbar-form" role="search">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Search Market" />
										</div>
										<button type="submit" className="btn btn-default">Search</button>
									</form>
								</li>
							</ul> 
						</div>
					</div>
				</nav>
			</div>
		);
	}
});

export default Nav;