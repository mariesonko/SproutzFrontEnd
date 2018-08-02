import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents, joinPlaydate } from '../actions';
import { Route } from 'react-router-dom';
import { Button, Form, Card, Feed } from 'semantic-ui-react';


class EventCard extends Component {
    constructor(props){
      super(props)
      this.state = {
        guest_id:'' , event_id: props.event.id,
        date:'', startTime:'', endTime:''
    }
  }


  handleClick = (e) => {
    e.preventDefault;
    // console.log('button clicked');
    const childFound = this.props.children.find(child => child.childFirstName === this.state.guest);
    // console.log(this.state);
    // get children from children array in state, not current_family. same with parents.
    // this is only the case on signup- add conditional check to use whichever array is longer

    // joining a playdate and persisting the playdate on the backend
      // use children array to get guest_id from user
        // find guest_id from array of children using this.state.guest (name of child)
      // use event's first playdate's host_id to get guest_id
      // event_id, date, startTime, and endTime all come from Event in props
    const playdatejoined = {
          host_id: this.state.host_id,
          guest_id: childFound.id,
          event_id: this.state.event_id,
          date: this.props.event.date,
          startTime: this.props.event.startTime,
          endTime: this.props.event.endTime
        }

    this.props.joinPlaydate(playdatejoined)
    // this.props.history.push('/MyPlaydates')

  }
  handleChangeDropDown (str) {
    return (e) => {
      this.setState({
          [str]: e.target.innerText
        })
    }
  }

  render() {

    const options2 = this.props.current_family.children ? this.props.current_family.children.map(child => {
      return { key: 'm', text: child.childFirstName, value: child.childFirstName }
    }) : [];

    const { event, current_family, children } = this.props;

    // console.log(event, current_family, children);
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
        <Form>
        <Form.Select onChange={this.handleChangeDropDown('guest')} fluid icon='Select Child' iconPosition='left' placeholder='Select Child' name='guest' value={this.state.guest} options={options2} />
         <Button type='submit' onClick={this.handleClick}>Join A Playdate!</Button>
       </Form>
        <br /> <br />
      </Card.Content>
        </Card>
      </Card.Group>
    )
  }

}


const mapStateToProps = (state) => {
  return { events: state.events.items,
          current_family: state.auth.current_family,
          children: state.families.children.length > state.auth.current_family.children.length ? state.families.children : state.auth.current_family.children
         }
}

export default connect(mapStateToProps, { getEvents, joinPlaydate })(EventCard);
