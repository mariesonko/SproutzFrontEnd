import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../actions';
import { Button, Form } from 'semantic-ui-react';

class Events extends Component {

  componentDidMount(){
    this.props.getEvents();
  }

  render() {
    const eventItems = this.props.events.map(event => (
      <div key={event.id}>
        <img src={event.imageUrl}/>
        <h3>{event.title}</h3>
        <h4>Event Date: {event.date}</h4>
        <h5>Start: {event.startTime} - End: {event.endTime}</h5>
        <p>{event.address}, {event.city}, {event.state} {event.zipCode}</p>
        <p>Description: {event.description}</p>
        <p>Entrance Fee: ${event.eventFees}</p>
        <Button type='submit'>Register</Button>
        <br /> <br />
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
