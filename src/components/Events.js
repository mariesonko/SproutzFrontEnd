import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getEvents } from '../actions'

class Events extends Component {

  componentDidMount(){
    this.props.getEvents();
  }
  
  render() {
    const eventItems = this.props.events.map(event => (
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

const mapStateToProps = (state) => {
  return { events: state.events.items }
}

export default connect(mapStateToProps, { getEvents })(Events);
