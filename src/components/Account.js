import React from 'react';
import {Link} from 'react-router';
var Account = React.createClass({
	render: function(){
		{var users = JSON.parse(localStorage.getItem('users'))}
		{var user = JSON.parse(sessionStorage.getItem('user'))}
		return (
			<div className='accountPage'>
					<div className='row'>
						<div className='col-sm-8 col-sm-offset-2 text-center'>
							<h1 className='text-center'>Details</h1>
							<hr width='25%' />

							<div className='col-sm-6'>
								<p><span>Name: </span> 
										{user.firstName + user.lastName}
								</p>

								<p><span>Email: </span> 
										{user.email}
								</p>
							</div>

							<div className='col-sm-6'>
								<p><span id='total-ads'>Total Ads: </span> 
										{user.ads.length}
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
								{
									user.ads.length === 0 ?
										<p className='ad-prompt text-center'>There are currently no ads to display</p> :
										''
								}
							</div>
						</div>

					</div>
			</div>
		);
	}
});

export default Account;