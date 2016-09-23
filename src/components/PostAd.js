import React from 'react';
import {Link} from 'react-router';

var PostAd = React.createClass({
	saveAd: function(e){
		e.preventDefault();
		var title = document.getElementById('title').value;
		var category = document.getElementById('categories').value;
		var description = document.getElementById('description').value;
		var photo = document.getElementById('photo').value;
		var name = document.getElementById('name').value;
		var number = document.getElementById('number').value;
		var city = document.getElementById('city').value;
		// var encodedPhoto = this.getBase64Image(photo);
		var adData = {
			title: title,
			category: category,
			description: description,
			photo: encodedPhoto,
			name: name,
			number: number,
			city: city,
		};
		var users = JSON.parse(localStorage.getItem('users'));
		users.forEach(function(user){
			if (user.email === JSON.parse(sessionStorage.getItem('user')).email) {
				user.ads.unshift(adData);

			}
		});
		localStorage.setItem('users', JSON.stringify(users));
		// window.location.replace('/#/myAccount', '');
	},
	getBase64Image: function(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    var img = new Image();
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
	},
	render: function(){
		return (
		<div className='col-sm-8 col-sm-offset-2 adForm'>
			<h1>Submit an ad</h1>
			<hr />
			<form className='form-horizontal' onSubmit={this.saveAd}>
					<div className="form-group">
				    <label htmlFor="title" className='col-sm-2'>Ad title</label>
				    <div className='col-sm-10'>
				    	<input type="text" className="form-control" id="title" required />
				    </div>
				  </div>

				  <div className="form-group">
				    <label htmlFor="categories" className='col-sm-2'>Categories</label>
				    <div className='col-sm-10'>
				    	<select className='form-control col-sm-2' id="categories">
				    		<option value="cars" defaultValue>Cars</option>
				    		<option value="phones">Phones</option>
				    		<option value="appliances">Electronic Appliances</option>
				    		<option value="fashion">Fashion</option>
				    		<option value="pets">Pets</option>
				    		<option value="books">Books</option>
				    		<option value="services">Services</option>
				    		<option value="bikes">Bikes</option>
				    	</select>
				    </div>
				  </div>
				  <hr />

				  <div className="form-group">
				    <label htmlFor="description" className='col-sm-2'>Ad Description</label>
				    <div className='col-sm-10'>
				    	<textarea className="form-control" id="description" required ></textarea>
				    </div>
				  </div>

				  <div className="form-group">
				    <label htmlFor="file" className='col-sm-2'>Upload Photo</label>
				    <div className='col-sm-10'>
				    	<input type="file" className="form-control" id="photo" required />
				    </div>
				  </div>
				  <hr />

				  <div className="form-group">
				    <label htmlFor="name" className='col-sm-2'>Name</label>
				    <div className='col-sm-10'>
				    	<input type="text" className="form-control" id="name" required />
				    </div>
				  </div>

				  <div className="form-group">
				    <label htmlFor="number" className='col-sm-2'>Phone Number</label>
				    <div className='col-sm-10'>
				    	<input type="tel" className="form-control" id="number" required />
				    </div>
				  </div>
					<hr />

					<div className="form-group">
				    <label htmlFor="city" className='col-sm-2'>City</label>
				    <div className='col-sm-10'>
				    	<input type="text" className="form-control" id="city" required />
				    </div>
				  </div>

				  <Link type="submit" to='/#/myAccount' className="btn btn-warning btn-lg col-sm-offset-2">Submit</Link>
				  <button type="reset" className="btn btn-default btn-lg">Reset</button>
			</form>
		</div>
		);
	}
});

export default PostAd;