import React, { Component } from 'react';
import './app.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';


class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			query : ''
		}
	}

	search() {
		console.log('this.state', this.state);
		const BASE_URL = 'https://api.spotify.com/v1/search?';
		const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
		console.log('FETCH_URL', FETCH_URL);
		var accessToken = 'BQCSqi-kCJB5qWqn6LQAmQVSNpr7cNCG6RoCOQK-fLZywOfbB2F05KASEc1-2xRoOgKYS13iGbuCm73D0HJ36rOQgVDiFwY0j__Hv3SYqUkx2821OVyRKQtzV8zHRd6GTu500ADvsMjkTmg9yK4bq-J7DmI7eLtKpho2NDSX1ArtMEwAJw&refresh_token=AQAF_9IY2YYKXEoMmznQIDL-vRCZHO-YAvut3QXU8QhctkQfv2SfxGwVEVSQLmp9lWaGnIvJPiAO1fu5ALb100AC6uf_iPfRDZ2NBXBuRqx40GaqThCZ4W9MOniWWYbdKCQ';
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
				<div className='profile'>
					<div> Artist Picture</div>
					<div>Artist Name</div>
				</div>

				<div className='gallery'>
					Gallery
				</div>

			</div> 
		)
	}


}

export default App; 