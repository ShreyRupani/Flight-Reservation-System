import React, { Component } from 'react';

class FilterFlights extends Component {

  static defaultProps = {
    Durations: ['', '<2 hours', '2-3 hours', '>3 hours'],
    Airlines: ['','Air India', 'Indigo', 'Jet Airways'],
    Departures: ['', 300, 600, 900, 1200, 1500, 1800, 2100, 2400],
    Arrivals: ['', 300, 600, 900, 1200, 1500, 1800, 2100, 2400]
  } 

  constructor() {
    super();
    this.state= {
      filterParameters:{}
    }
  }

  handleFilter(e) {
    this.setState({filterParameters: {
      duration: this.refs.duration.value,
      airline: this.refs.airline.value,
      departure: this.refs.departure.value,
      arrival: this.refs.arrival.value,
    }}, function(){
      // console.log(this.state)
      this.props.FilterFlights(this.state.filterParameters)
    })
  }

  render() {
    let durationOptions = this.props.Durations.map(duration => {
      return <option key={duration} value={duration}>
        {duration}
      </option>
    })
    let airlineOptions = this.props.Airlines.map(airline => {
      return <option key={airline} value={airline}>
        {airline}
      </option>
    })
    let departureOptions = this.props.Departures.map(departure => {
      return <option key={departure} value={departure}>
        {departure}
      </option>
    })
    let arrivalOptions = this.props.Arrivals.map(arrival => {
      return <option key={arrival} value={arrival}>
              {arrival}
            </option>
    })

    return (
      <div>
        <label>Filters: </label>
        <select>  
          <optgroup label="By Duration" ref="duration" onChange={this.handleFilter.bind(this)}>
            {durationOptions}
          </optgroup>
          <optgroup label="By Airline" ref="airline" onChange={this.handleFilter.bind(this)}>
            {airlineOptions}
          </optgroup>
          <optgroup label="By Departures before" ref="departure" onChange={this.handleFilter.bind(this)}>
            {departureOptions}
          </optgroup>
          <optgroup label="By Arrivals before" ref="arrival" onChange={this.handleFilter.bind(this)}>
            {arrivalOptions}
          </optgroup>
        </select>
      </div>
    );
  }
}

export default FilterFlights;
