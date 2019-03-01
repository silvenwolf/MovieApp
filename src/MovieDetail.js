import React,{ Component } from 'react';

	
class MovieDetail extends Component {		
	
render(){
	return <div className='fontStyle'>	
		<table className = 'popup_table'>
			<tbody>
				<tr>
					<td className = 'popup_tableText b grey'>Description:</td>
					<td className = 'popup_tableText grey'>{this.props.details.overview}</td>
				</tr>
				<tr>
					<td className = 'popup_tableText b '>Genre:</td>
					<td className = 'popup_tableText '>				
						{this.props.details.genres.map((g) => g.name).join(" | ")}			
					</td>
				</tr>
				<tr>
					<td className = 'popup_tableText b grey'>Tagline:</td>
					<td className = 'popup_tableText grey'>{this.props.details.tagline}</td>
				</tr>
				<tr>
					<td className = 'popup_tableText b '>Runtime:</td>
					<td className = 'popup_tableText '>{this.props.details.runtime} min</td>
				</tr>
			</tbody>
		</table>
	</div>	
	}
}
	
export default MovieDetail;