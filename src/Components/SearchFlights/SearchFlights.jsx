import React, { Component } from 'react';
import './SearchFlights.css';
import '../../App.css';
class SearchFlights extends Component {

  static defaultProps = {
    sources: ['Bangalore', 'Chennai', 'Kolkata', 'Delhi'],
    destinations: ['Bangalore', 'Chennai', 'Kolkata', 'Delhi'],
    seats: [...Array(56).keys()],
  }  

  constructor() {
    super();
    this.state= {
      searchParameters:{}
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({searchParameters: {
      source: this.refs.source.value,
      destination: this.refs.destination.value,
      numberOfSeats: this.refs.numberOfSeats.value,
    }}, function(){
      // console.log(this.state)
      this.props.searchFlights(this.state.searchParameters)
    })
  }

  render() {
    let sourceOptions = this.props.sources.map(source => {
      return <option key={source} value={source}>
              {source}
            </option>
    })
    let destinationOptions = this.props.destinations.map(destination => {
      return <option key={destination} value={destination}>
              {destination}
            </option>
    })
    let seatingOptions = this.props.seats.map(seat => {
      return <option key={seat + 1} value={seat + 1}>
              {seat + 1}
            </option>
    })
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} className="SearchFlights">
          <div>
            <label className= "Headings">Source: </label>
            <select ref="source" className= "Headings">
              {sourceOptions}
            </select> 
          </div>
          <div>
            <label className="Headings">Destination: </label>
            <select ref="destination" className= "Headings">
              {destinationOptions}
            </select> 
          </div>
          <div>
            <label className= "Headings">Number of Seats: </label>
            <select ref="numberOfSeats" className= "Headings">
              {seatingOptions}
            </select> 
          </div>
          <input type="submit" value="Submit" className="SubmitButton" />
        </form>
      </div>
    );
  }
}

export default SearchFlights;
