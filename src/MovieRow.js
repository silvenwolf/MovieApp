import React ,  { Component } from 'react';
import $ from 'jquery'
import MovieDetail from './MovieDetail.js';

class Popup extends Component{	
	constructor(props){
		super(props);
		this.state = {}
		this.getMovieDetails();
	}
	
	getMovieDetails(){		
		const urlStr =  "https://api.themoviedb.org/3/movie/" + this.props.movie.id + "?api_key=a2dcbae7116c39c533f91f02d29194ab&language=en-US";
	
		$.ajax({
			url: urlStr,
			success: (moviedetail) => {
				 console.log("fetched movie data successfully");
				 console.log(moviedetail);
				 
				 const details = <MovieDetail details={moviedetail} />
				 this.setState({selectedMovie: details});
				},
			 error: (xhr, status, err) => {
				console.error("failed to fetch movie data");
			 }			
		 })
	}

	
	render(){
		return(
			<div className = 'popup'>
				<div className =  'popup_inner'>
					<h3><b>{this.props.movie.title}</b> </h3>
						
					{this.state.selectedMovie}
						
					<p><button onClick={this.props.closePopup}>Close</button></p>
				</div>
			</div>
		)	
	}
}

class MovieRow extends Component {
	constructor(){
		super();
		this.state={showPopup: false
		};
	}
	
	togglePopup(){
		this.setState({showPopup: !this.state.showPopup
		});
	}
	
	viewMovie(){
		const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
		let params = "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=0,height=0,left=-1000,top=-1000";
		window.open(url, this.props.movie.title, params );
	}
	
	render(){		
		return <div>
			<table key = {this.props.movie.id}  style={{width:900}}>
				<tbody>
					<tr>
						<td><img alt="poster" src={this.props.movie.poster_src} /></td>
						<td className = 'fontStyle'>
							<h3 className='fontHeaderStyle'>{this.props.movie.title}</h3>
							<p>{this.props.movie.release_date}</p>
							<p>{this.props.movie.overview}</p>
							<input type="button" onClick = {this.togglePopup.bind(this)} value="Details"  />
						</td>
					</tr>
				</tbody>
			</table>
			
			{this.state.showPopup ? <Popup 									
									movie={this.props.movie}
									closePopup={this.togglePopup.bind(this)} />
								: null
			}			
		</div>		
	}
	
}

export default MovieRow;