import React from 'react';
import Nav from './Nav';

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<Nav handleState={this.props.route.homeState} />
				{this.props.children}
			</div>
		);
	}
});

export default Main;	 