import React, { Component } from 'react';
import uuid from 'uuid'
import SearchFlights from './Components/SearchFlights/SearchFlights'
import FilterFlights from './Components/FilterFlights/FilterFlights'
import SortFlights from './Components/SortFlights/SortFlights'
import DisplayFlights from './Components/DisplayFlights/DisplayFlights'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      flights: [],
      searchedFlights: [],
      displayFlights: [],
    }
  }

  componentWillMount(){
    this.setState({flights: [
      {
        id:uuid.v4(),
        from: 'Chennai',
        to: 'Delhi',
        Departure: '1700',
        Arrival: '1940',
        Duration: 160,
        Airline: 'Jet Airways',
        SeatsAvailable: 1,
        Price: 6900,
      },
      {
        id:uuid.v4(),
        from: 'Kolkata',
        to: 'Bangalore',
        Departure: '2140',
        Arrival: '0010',
        Duration: 150,
        Airline: 'Air India',
        SeatsAvailable: 1,
        Price: 7500,
      },
      {
        id:uuid.v4(),
        from: 'Bangalore',
        to: 'Kolkata',
        Departure: '0700',
        Arrival: '0930',
        Duration: 150,
        Airline: 'Jet Airways',
        SeatsAvailable: 2,
        Price: 4000,
      },
      {
        id:uuid.v4(),
        from: 'Delhi',
        to: 'Chennai',
        Departure: '1230',
        Arrival: '1520',
        Duration: 170,
        Airline: 'Air India',
        SeatsAvailable: 2,
        Price: 9000,
      },
      {
        id:uuid.v4(),
        from: 'Bangalore',
        to: 'Kolkata',
        Departure: '1700',
        Arrival: '1900',
        Duration: 120,
        Airline: 'Air India',
        SeatsAvailable: 3,
        Price: 10000,
      },
      {
        id:uuid.v4(),
        from: 'Kolkata',
        to: 'Bangalore',
        Departure: '2130',
        Arrival: '0010',
        Duration: 160,
        Airline: 'Jet Airways',
        SeatsAvailable: 3,
        Price: 6300,
      },
      {
        id:uuid.v4(),
        from: 'Bangalore',
        to: 'Kolkata',
        Departure: '1800',
        Arrival: '2000',
        Duration: 120,
        Airline: 'Indigo',
        SeatsAvailable: 5,
        Price: 6000,
      },
      {
        id:uuid.v4(),
        from: 'Delhi',
        to: 'Chennai',
        Departure: '0300',
        Arrival: '0600',
        Duration: 180,
        Airline: 'Air India',
        SeatsAvailable: 7,
        Price: 8000,
      },
      {
        id:uuid.v4(),
        from: 'Chennai',
        to: 'Delhi',
        Departure: '0200',
        Arrival: '0500',
        Duration: 180,
        Airline: 'Air India',
        SeatsAvailable: 10,
        Price: 7000,
      },
      {
        id:uuid.v4(),
        from: 'Kolkata',
        to: 'Bangalore',
        Departure: '0550',
        Arrival: '0750',
        Duration: 120,
        Airline: 'Air India',
        SeatsAvailable: 12,
        Price: 5699,
      },
      {
        id:uuid.v4(),
        from: 'Delhi',
        to: 'Chennai',
        Departure: '1220',
        Arrival: '1520',
        Duration: 180,
        Airline: 'Air India',
        SeatsAvailable: 12,
        Price: 9000,
      },
      {
        id:uuid.v4(),
        from: 'Bangalore',
        to: 'Kolkata',
        Departure: '0300',
        Arrival: '0500',
        Duration: 120,
        Airline: 'Indigo',
        SeatsAvailable: 21,
        Price: 6500,
      },
      {
        id:uuid.v4(),
        from: 'Kolkata',
        to: 'Bangalore',
        Departure: '0550',
        Arrival: '0800',
        Duration: 130,
        Airline: 'Indigo',
        SeatsAvailable: 21,
        Price: 5700,
      },
      {
        id:uuid.v4(),
        from: 'Chennai',
        to: 'Delhi',
        Departure: '1650',
        Arrival: '1900',
        Duration: 130,
        Airline: 'Air India',
        SeatsAvailable: 24,
        Price: 5750,
      },
      {
        id:uuid.v4(),
        from: 'Delhi',
        to: 'Chennai',
        Departure: '0300',
        Arrival: '0600',
        Duration: 180,
        Airline: 'Indigo',
        SeatsAvailable: 25,
        Price: 7999,
      },
      {
        id:uuid.v4(),
        from: 'Chennai',
        to: 'Delhi',
        Departure: '0500',
        Arrival: '0800',
        Duration: 180,
        Airline: 'Air India',
        SeatsAvailable: 26,
        Price: 8000,
      },
      {
        id:uuid.v4(),
        from: 'Bangalore',
        to: 'Kolkata',
        Departure: '1800',
        Arrival: '2100',
        Duration: 180,
        Airline: 'Air India',
        SeatsAvailable: 27,
        Price: 5000,
      },
      {
        id:uuid.v4(),
        from: 'Delhi',
        to: 'Chennai',
        Departure: '0300',
        Arrival: '0605',
        Duration: 185,
        Airline: 'Jet Airways',
        SeatsAvailable: 29,
        Price: 7500,
      },
      {
        id:uuid.v4(),
        from: 'Kolkata',
        to: 'Bangalore',
        Departure: '0230',
        Arrival: '0450',
        Duration: 140,
        Airline: 'Air India',
        SeatsAvailable: 36,
        Price: 4500,
      },
      {
        id:uuid.v4(),
        from: 'Chennai',
        to: 'Delhi',
        Departure: '1700',
        Arrival: '1950',
        Duration: 170,
        Airline: 'Indigo',
        SeatsAvailable: 56,
        Price: 4800,
      }
    ]})
  }

  handleSearchFlights(searchParameters){
    let flights = this.state.flights
    let searchedFlights = flights.filter(flight => (flight.to === searchParameters.destination && flight.from === searchParameters.source && flight.SeatsAvailable >= searchParameters.numberOfSeats))
    this.setState({searchedFlights:searchedFlights, displayFlights:searchedFlights})
  }

  handleFilterFlights(filterParameters){
    let displayFlights = this.state.displayFlights;
    let filteredFlights
    console.log('11111',filterParameters)
    if (displayFlights.length !== 0) {  
      if(filterParameters.duration !== ''){
        if(filterParameters.duration === '<2 hours') {
          filteredFlights = displayFlights.filter(flight => (flight.Duration > 0 && flight.Duration < 120))
        } else if (filterParameters.duration === '2-3 hours') {
          filteredFlights = displayFlights.filter(flight => (flight.Duration > 120 && flight.Duration < 180))
        } else {
          filteredFlights = displayFlights.filter(flight => (flight.Duration > 180))
        }
      }
      displayFlights = filteredFlights

      
      if(filterParameters.airline !== ''){
        filteredFlights = displayFlights.filter(flight => 
        flight.Airline === filterParameters.airline)
      }
      displayFlights = filteredFlights


      if(filterParameters.departure !== ''){
        filteredFlights = displayFlights.filter(flight => 
        flight.Departure < filterParameters.departure && flight.Departure > filterParameters.departure-300)
      }
      displayFlights = filteredFlights

      if(filterParameters.arrival !== ''){
        filteredFlights = displayFlights.filter(flight => 
        flight.Arrival < filterParameters.departure && flight.Arrival > filterParameters.departure-300)
      }
      displayFlights = filteredFlights
        
      this.setState({displayFlights:displayFlights})
    }
  }


  handleSortFlights(sortParameters){
    let sortParameter = sortParameters.sort
    let displayFlights = this.state.displayFlights
    let sortedFlights
    
    if(displayFlights.length !== 0 && sortParameter){
      if (sortParameter === 'Price'){
        sortedFlights = displayFlights.sort(function(a, b) {
          return a.Price - b.Price
        })  
      } else if (sortParameter === 'Duration'){
        sortedFlights = displayFlights.sort(function(a, b) {
          return a.Duration - b.Duration
        })
      } else if (sortParameter === 'Arrival') {
        sortedFlights = displayFlights.sort(function(a, b) {
          return a.Arrival - b.Arrival
        })
      } else if (sortParameter === 'Departure') {
        sortedFlights = displayFlights.sort(function(a, b) {
          return a.Departure - b.Departure
        })
      } else if (sortParameter === 'SeatsAvailable') {
        sortedFlights = displayFlights.sort(function(a, b) {
          return a.SeatsAvailable - b.SeatsAvailable
        })
      } else if (sortParameter === 'Airline') {
        sortedFlights = displayFlights.sort(function(a, b) {
          return a.Airline.localeCompare(b.Airline)
        })
      }
    }
    this.setState({displayFlights:sortedFlights})
  }

  render() {
    return (
      <div className="App">
        <h2 className="Header">
            Flight Reservation System
        </h2>
        <div className="Headings">
          <SearchFlights searchFlights={this.handleSearchFlights.bind(this)}/>
          <FilterFlights filterFlights={this.handleFilterFlights.bind(this)}/>
          <SortFlights sortFlights={this.handleSortFlights.bind(this)}/>
        </div>
        <DisplayFlights displayFlights={this.state.displayFlights}/>
      </div>
    );
  }
}

export default App;
