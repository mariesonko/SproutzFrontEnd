import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../actions';
import { Route } from 'react-router-dom';
import { Button, Form, Card, Feed } from 'semantic-ui-react';
import withAuth from '../hocs/withAuth';


class Events extends Component {

  componentDidMount(){
    this.props.getEvents();
  }

  render() {

    const eventItems = this.props.events.map(event => {
      return (
        <Card.Group key={event.id}>
      <Card color='olive' itemsPerRow={4}>
      <Card.Content>
        <Card.Header>{event.title}</Card.Header>
         <Card image={event.imageUrl} />
         <Card.Meta>Event Date: {event.date}</Card.Meta>
        <Card.Meta>Start: {event.startTime} - End: {event.endTime}</Card.Meta>
        <Card.Meta>{event.address}, {event.city}, {event.state} {event.zipCode}</Card.Meta>
          <Card.Description>Description: {event.description}</Card.Description>
        <Card.Meta>{event.eventFees}</Card.Meta>
        <Route render={({ history}) => (
         <Button type='submit' onClick={() => { history.push('/myPlaydates') }}>Join A Playdate!</Button> )} />
        {/* <Button type='submit'>Register</Button> */}
        <br /> <br />
      </Card.Content>
        </Card>
      </Card.Group>
    )
  })
    return (
      <div className='Events' itemsPerRow={4}>
        {/* <h1>Events</h1> */}
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
