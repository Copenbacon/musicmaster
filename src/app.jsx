import React, { Component } from 'react';
import './app.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './profile.jsx'

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			query : '',
			artist: null
		}
	}

	search() {
		console.log('this.state', this.state);
		const BASE_URL = 'https://api.spotify.com/v1/search?';
		const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
		console.log('FETCH_URL', FETCH_URL);
		var accessToken = 'BQCCNsaaO-Jdt9GSSi3u-3ynqTM_s_zSNybf6FyFaDtN1oOrQJYk2rdLpMa_NTvqDJVEgigDixoVrfC9oncRkwuFJBRlHZgmNxWlXF0csDiopEE8e_JvIpLXSB4rkFc2TqzNj5xep4wOmMqP4igmdK6O0KbOFHR79GyPlkhjVBKT0bywAQ&refresh_token=AQD4L8cZUqEUOhnlkLdDGKxbmzNtFSyZ6al--bymW2swABCQtCYbilgMPP5UpWxlVlOfpZAOLMN81CetbTPj0IKHKtyHJj4fWtre59iecfceqaAdNS-kcF0iMI0FLaSq0bw';
	    var myHeaders = new Headers();

	    var myOptions = {
	      method: 'GET',
	      headers:  {
	        'Authorization': 'Bearer ' + accessToken
	     },
	      mode: 'cors',
	      cache: 'default'
	    };

	    fetch(FETCH_URL, myOptions )
	      .then(response => response.json())
	      .then(json => {
	      		const artist = json.artists.items[0];
	      		console.log('artist', artist);
	      		this.setState({artist});
	      	})

	}

	render(){
		return (
			<div className='App'>
				<div className='App-title'>Music Master</div>
				<FormGroup>
					<InputGroup>
							<FormControl 
								type='text' 
								placeholder='Search for an Artist'
								value={this.state.query}
								onChange={event => {this.setState({query: event.target.value})}}
								onKeyPress={event => {
									if (event.key === 'Enter') {
										this.search();
									}
								}}
								/>
						
						<InputGroup.Addon onClick={() => this.search()}>
							<Glyphicon glyph='search'></Glyphicon>
						</InputGroup.Addon>
					</InputGroup>
				</FormGroup>
				<Profile 
					artist={this.state.artist}
				/>

				<div className='gallery'>
					Gallery
				</div>

			</div> 
		)
	}


}

export default App; 