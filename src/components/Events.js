import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../actions';
import { Route } from 'react-router-dom';
import { Button, Form, Card, Feed } from 'semantic-ui-react';
import withAuth from '../hocs/withAuth';
import EventCard from './EventCard';


class Events extends Component {

  componentDidMount(){
    this.props.getEvents();
  }

  render() {
console.log(this.props.events);
    const eventItems = this.props.events.map(event => <EventCard event={event}/>)

    return (
      <div className='Events'>
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
