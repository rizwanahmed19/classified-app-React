import React from 'react';

var Account = React.createClass({
	render: function(){
		{var users = JSON.parse(localStorage.getItem('users'))
		//users[JSON.parse(sessionStorage.getItem('user')).email].ads.length
		console.log(users)
		console.log(JSON.parse(sessionStorage.getItem('user')).email)
	}
		return (
			<div className='accountPage'>
					<div className='row'>
						<div className='col-sm-8 col-sm-offset-2'>

							<h1 className='text-center'>Details</h1>
							<hr width='25%' />
							<div className='col-sm-6'>
								<p><span>Name: </span> 
										{JSON.parse(sessionStorage.getItem('user')).firstName + JSON.parse(sessionStorage.getItem('user')).lastName}
								</p> 
								<p><span>Email: </span> 
										{JSON.parse(sessionStorage.getItem('user')).email}
								</p>
							</div>
							<div className='col-sm-6'>
								<p><span>Total Ads: </span> 
								}
								</p>
								<p></p>
							</div>
							<hr />
						</div>
					</div>
					<div className='row'>
						<div className='col-sm-8 col-sm-offset-2'>
							<h1 className='text-center'>My Ads</h1>
							<hr width='25%' />
							<div className='adsList'>

							</div>
						</div>

					</div>
			</div>
		);
	}
});

export default Account;