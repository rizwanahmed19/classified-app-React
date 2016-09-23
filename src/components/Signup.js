import React from 'react';

var Signup = React.createClass({
	handleSignupSubmit: function(e){
		e.preventDefault();
		var firstName, lastName, email, password;
		firstName = document.getElementById('firstName').value;
		lastName = document.getElementById('lastName').value;
		email = document.getElementById('email').value;
		password = document.getElementById('password').value;
		var users = [];
		var signupData = {
			firstName,
			lastName,
			email,
			password,
			ads: []
		};
		
		var emailExist = false;
		if(localStorage.getItem('users')){
			JSON.parse(localStorage.getItem('users')).forEach(function(user){
				if(user.email === email){
					alert('Email already exists!');
					emailExist = true;
				}
			});

			if(!emailExist){
				users.push(signupData);
				localStorage.setItem('users', JSON.stringify(JSON.parse(localStorage.getItem('users')).concat(users)));
				sessionStorage.setItem('user', JSON.stringify(signupData));
				this.props.onFormSubmit(true);
			}
		} else {
				users.push(signupData);
				localStorage.setItem('users', JSON.stringify(users));
				sessionStorage.setItem('user', JSON.stringify(signupData));
				this.props.onFormSubmit(true);
			}
	},

	render: function(){
		return (
			<div className='signup'>
				<h2>Sign up</h2>
				<form onSubmit={this.handleSignupSubmit}>
					<div className="row">
            <div className="col-xs-6">
           		<div className="form-group form-inline">
              	<label className="lab col-sm-4" htmlFor="firstName" >First Name</label>
                  <input className="form-control col-sm-8" name="firstname" id="firstName" type="text"
                    required placeholder='First Name' />
	             </div>
		        </div>
            <div className="col-xs-6">
            	<div className="form-group form-inline">
              	<label className="lab col-sm-4" htmlFor="lastName" >Last Name</label>
                  <input className="form-control col-sm-8" name="lastname" id="lastName" type="text" required 
                  placeholder='Last Name'/>
                </div>
            </div>
		      </div>
		      <div className="row">
		        <div className="col-xs-6">
						  <div className="form-group form-inline">
						    <label className="lab col-sm-4" htmlFor="email" >Email </label>
						    <input type="email" className="form-control col-sm-8" name="email" id="email" required
						    placeholder='Email' />
						  </div>
					  </div>
					  <div className="col-xs-6">
						  <div className="form-group form-inline">
						    <label className="lab col-sm-4" htmlFor="password">Password</label>
						    <input type="password" className="form-control col-sm-8" name="password" id="password" required
						    placeholder='Password' />
						  </div>
					  </div>
				  </div>
				  <button type='submit' className="btn btn-default">Sign Up</button>
				</form>
			</div>
		);
	}
});

export default Signup;