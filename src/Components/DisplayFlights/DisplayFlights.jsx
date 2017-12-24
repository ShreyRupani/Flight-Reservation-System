import React, { Component } from 'react';
import Flight from '../Flight/Flight'
import './DisplayFlights.css';
class DisplayFlights extends Component {

  render() {
  	let flightItems;
  	if(this.props.displayFlights.length !== 0){
  		flightItems = this.props.displayFlights.map(flight => {
  			return(
  			  <Flight
  			  	key={flight.id}
  			  	flight={flight}
  			  />
				)
 	 		});
	    return (
	      <table>
	      	<thead>
		      	<tr>
		      	  <th> From </th>
							<th> To </th>
		      		<th> Departure </th>
		      		<th> Arrival </th>
		      		<th> Duration </th>
		      		<th> Airline </th>
		      	  <th> Seats Available </th>
		      		<th> Price </th>
		      	</tr>
		      </thead>
		      <tbody>
		      	{flightItems}
		      </tbody>
	      </table> 
	    )
  	} else {
  		return (
  			<h3>No flights found that match the criteria :(</h3>	
			)
  	}
  }
}

export default DisplayFlights;
