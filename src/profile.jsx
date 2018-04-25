import React, { Component } from 'react';
import './app.css';

class Profile extends Component {
	render() {
		console.log('this.props', this.props);
		let artist = {name:'', followers: {total: '',}, images: [{url: ''}]};
		if(this.props.artist !== null){
			artist = this.props.artist;
		}

		return (
			<div>
				<img 
					alt='Profile'
					className='profile-img'
					src={artist.images[0].url}
				/>
				<div>{artist.name}</div>
				<div>{artist.followers.total}</div>
			</div>

		)
	}

}

export default Profile;