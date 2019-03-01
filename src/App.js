import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery'

class App extends Component {
	constructor(props){
		super(props)
		
		this.state = {};	
		this.getLatestMovies();			
					
	}
	
	getLatestMovies(){
		const urlStr = "https://api.themoviedb.org/3/movie/upcoming?api_key=a2dcbae7116c39c533f91f02d29194ab&language=en-US&page=1";
		
		$.ajax({
			url: urlStr,
			success: (latestMovies) => {
				console.log("fetched data successfully");
				
				const results = latestMovies.results;				
				var movieRows = [];
				
				results.sort((a, b) => new Date(a.release_date.split('/').reverse()) - new Date(b.release_date.split('/').reverse()));
				
				results.forEach((movie) => {
					movie.poster_src = "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.poster_path;
										
					if (movie.popularity >= 10) {
						const currentMovie = <MovieRow key={movie.id} movie={movie}/>
						movieRows.push(currentMovie);					
					}										  
					
				});
				
				this.setState({rows: movieRows});
			},
			error: (xhr, status, err) => {
				console.error("failed to fetch data");
			}
			
		})
	}
	
  render() {
    return (
	<div className = "App">
		<table className="titleBar">
			<tbody>
				<tr>
					<td><img alt="app Icon" width="50" src="tiff_logo.JPG" /></td>
					<td width="8" />
					<td><h2 className = 'fontHeaderStyle'> Movie Listing</h2></td>
				</tr>
			</tbody>
		</table>
	
			
		{this.state.rows}
      </div>
    )
  }
}

export default App;
