import React from 'react';
import {Link} from 'react-router';
var Account = React.createClass({
	render: function(){
		{var users = JSON.parse(localStorage.getItem('users'))}
		return (
			<div className='accountPage'>
					<div className='row'>
						<div className='col-sm-8 col-sm-offset-2 text-center'>
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
								<p><span id='total-ads'>Total Ads: </span> 
										{JSON.parse(sessionStorage.getItem('user')).ads.length}
								</p>

								<Link to='/postAd' className='btn btn-warning btn-md headline-btn' >Submit an ad</Link>
							</div>
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