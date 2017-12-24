import React, { Component } from 'react';
import Indigo from '../../Indigo Logo.jpg'
import JetAirways from '../../Jet Airways Logo.jpg'
import AirIndia from '../../Air India Logo.jpg'
import './Flight.css';
class Flight extends Component {
  render() {
    let logo;
    if(this.props.flight.Airline === 'Indigo')
      logo = Indigo
    else if(this.props.flight.Airline === 'Jet Airways')
      logo = JetAirways
    else
      logo = AirIndia
    return (
    	<tr>
    		<td>
    		  {this.props.flight.from}
    		</td>
    		<td>
	      	  {this.props.flight.to}
    		</td>
    		<td>
    		  {this.props.flight.Departure}
    		</td>
    		<td>
			  {this.props.flight.Arrival}
    		</td>
    		<td>
			  {this.props.flight.Duration}
    		</td>
    		<td className="flight">
          <img src={logo} />
    		  {this.props.flight.Airline}  
    		</td>
    		<td>
			  {this.props.flight.SeatsAvailable}
    		</td>
    		<td>
		  	  {this.props.flight.Price}
    		</td>
    	</tr>
    );
  }
}

export default Flight;
