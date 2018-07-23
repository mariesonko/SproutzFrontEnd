import React, { Component } from 'react';

class Events extends Component {
    constructor(props) {
      super(props);
      this.state = {
        events: []
      }
    }
  componentWillMount(){
    fetch('http://localhost:3000/api/v1/events')
    .then(resp => resp.json())
    .then(result => this.setState({
      events: result
    }))
  }
  render() {
    const eventItems = this.state.events.map(event => (
      <div key={event.id}>
        <h3>{event.eventType}</h3>
        <h4>Event Date: {event.date}</h4>
        <h5>Start: {event.startTime} - End: {event.endTime}</h5>
        <p>{event.address}, {event.city}, {event.state} {event.zipCode}</p>
        <p>{event.description}</p>
        <p>Entrance Fee: ${event.eventFees}</p> <br />
      </div>
    ))
    return (
      <div className='Events'>
        <h1>Events</h1>
        { eventItems}
      </div>
    );
  }
}

export default Events;
