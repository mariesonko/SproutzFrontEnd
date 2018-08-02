import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../actions';
import { Route } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import { Card, Feed } from 'semantic-ui-react'
import withAuth from '../hocs/withAuth';


class Events extends Component {

  componentDidMount(){
    this.props.getEvents();
  }

  render() {

    const eventItems = this.props.events.map(event => {
      return (
        <div key={event.id}>
        <img src={event.imageUrl}/>
        <h3>{event.title}</h3>
        <h4>Event Date: {event.date}</h4>
        <h5>Start: {event.startTime} - End: {event.endTime}</h5>
        <p>{event.address}, {event.city}, {event.state} {event.zipCode}</p>
        <p>Description: {event.description}</p>
        <p>Entrance Fee: ${event.eventFees}</p>
        <Route render={({ history}) => (
         <Button type='submit' onClick={() => { history.push('/myPlaydates') }}>Join A Playdate!</Button> )} />
        {/* <Button type='submit'>Register</Button> */}
        <br /> <br />
      </div>
    )
  })
    return (
      <div className='Events'>
        <h1>Events</h1>
        { eventItems}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { events: state.events.items,
          current_family: state.auth.current_family
         }
}

export default withAuth(connect(mapStateToProps, { getEvents })(Events));
