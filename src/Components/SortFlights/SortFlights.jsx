import React, { Component } from 'react';
// import './SortFlights.css';

class SortFlights extends Component {

  static defaultProps = {
    sorts: ['', 'Price', 'Duration', 'Arrival', 'Departure', 'SeatsAvailable', 'Airline'],
  } 

  constructor() {
    super();
    this.state= {
      sortParameters:{}
    }
  }

  handleSort(e) {
    e.preventDefault();
    this.setState({sortParameters: {
      sort: this.refs.sort.value,
    }}, function(){
      // console.log(this.state)
      this.props.sortFlights(this.state.sortParameters)
    })
  }

  render() {
   let sortOptions = this.props.sorts.map(sort => {
    return <option key={sort} value={sort}>
      {sort}
    </option>
    })
    return (
      <div>
        <label>Sort: </label>
        <select ref="sort" onChange={this.handleSort.bind(this)}>
          {sortOptions}
        </select> 
      </div>
    );
  }
}

export default SortFlights;
