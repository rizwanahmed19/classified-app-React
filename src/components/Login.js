import React from 'react';

var Login = React.createClass({
	getFormData: function(e){

		var data = {};
		var email = this.refs.email.value;
		var password = this.refs.password.value;

		localStorage.getItem('users') ? 
			(
				JSON.parse(localStorage.getItem('users')).forEach(function(user) {
					if(user.email === email){
						if(user.password === password){
							data['email'] = email;
							data['password'] = password;
							data['firstName'] = user.firstName;
							data['lastName'] = user.lastName;
							data['ads'] = user.ads;
							sessionStorage.setItem('user', JSON.stringify(data));
							this.props.onFormSubmit(true);
						} else {
							alert('Password incorrect!');
						}
					}	else {
						alert('Email incorrect!');
					}
				}, this)
			) :
			alert("Email doesn't exist!");
	},
	render: function(){
		return (
			<div className='login'>
				<h2>Login</h2>
				<form className="form-horizontal" onSubmit={this.getFormData}>
				  <div className="form-group">
				    <label htmlFor="inputEmail3" className="col-sm-4 control-label">Email</label>
				    <div className="col-sm-8">
				      <input type="email" ref='email' className="form-control" placeholder="Email" required/>
				    </div>
				  </div>
				  <div className="form-group">
				    <label htmlFor="password" className="col-sm-4 control-label">Password</label>
				    <div className="col-sm-8">
				      <input type="password" ref='password' className="form-control" placeholder="Password" required/>
				    </div>
				  </div>
				  <div className="form-group">
				    <div className="col-sm-offset-2 col-sm-10">
				      <button type="submit" className="btn btn-default">Log in</button>
				    </div>
			  </div>
				</form>
			</div>
		);
	}
});

export default Login;