import React, { Component } from 'react';
import './app.css';

class Profile extends Component {
	render() {
		console.log('this.props', this.props);
		let artist = {name:'', followers: {total: '',}, images: [{url: ''}], genres:[]};
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
				<div>
					{
						artist.genres.map((genre, index) => {
							genre = genre !== artist.genres[artist.genres.length - 1] ? ` ${genre} |` : ` ${genre}`
							return (
								<span key={index}>{genre}</span>
							);
						})
					}
				</div>
			</div>

		)
	}

}

export default Profile;