import React from 'react';
import {Link} from 'react-router';

var Categories = React.createClass({
	render: function(){
		return (
			<div className="categories">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-3 text-center">
							<i className="ion-model-s"></i>
							<br />
							<Link to=''>Cars</Link>
						</div>
						<div className="col-sm-3 text-center">
							<i className="ion-iphone"></i>
							<br />
							<Link to=''>Phones</Link>
						</div>
						<div className="col-sm-3 text-center">
							<i className="ion-android-desktop"></i>
							<br />
							<Link to=''>Electronic Appliances</Link>
						</div>
						<div className="col-sm-3 text-center">
							<i className="ion-bag"></i>
							<br />
							<Link to=''>Fashion</Link>
						</div>
					</div>

					<div className="row">
						<div className="col-sm-3 text-center">
							<i className="ion-ios-paw"></i>
							<br />
							<Link to=''>Pets</Link>
						</div>
						<div className="col-sm-3 text-center">
							<i className="ion-ios-book"></i>
							<br />
							<Link to=''>Books</Link>
						</div>
						<div className="col-sm-3 text-center">
							<i className="ion-settings"></i>
							<br />
							<Link to=''>Services</Link>
						</div>
						<div className="col-sm-3 text-center">
							<i className="ion-android-bicycle"></i>
							<br />
							<Link to=''>Bikes</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

export default Categories;