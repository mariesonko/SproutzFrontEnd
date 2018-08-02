import React, { Component } from 'react';
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { getEvents } from '../actions';
import { postLoginInfo } from '../actions/index';
import withAuth from '../hocs/withAuth';
import { render } from 'react-dom';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


moment.locale('en-GB');
BigCalendar.momentLocalizer(moment);

const allViews = Object
  .keys(BigCalendar.Views)
  .map(k => BigCalendar.Views[k])


class MyPlaydates extends Component {

  state = {
    events: this.props.events
  };


  onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    console.log(start);
  };
  render( ) {
//     {
//   id: 0,
//   title: 'All Day Event very long title',
//   allDay: true,
//   start: new Date(2015, 3, 0),
//   end: new Date(2015, 3, 1),
// }
  const playdateEvent = this.props.playdates.map(playdate => {
    return {
      id: playdate.id,
      title: 'Playdate Info',
      allDay: false,
      start: new Date(`${playdate.date} ${playdate.military_start_time}`),
      end: new Date(`${playdate.date} ${playdate.military_end_time}`),

    }
  })
    console.log(this.props.playdates);
    return (
      <div style={{ height: "100vh" }}>
    <BigCalendar


        events={playdateEvent}
        onEventDrop={this.onEventDrop}
        onEventResize={this.onEventResize}
        resizable

      step={60}
      views={allViews}
      defaultDate={new Date()}
      defaultView="month"
    />
  </div>
)
  }
}

const mapStateToProps = (state) => {
  return {

          playdates: [...state.auth.current_family.passive_playdates, ...state.auth.current_family.active_playdates],
          current_family: state.auth.current_family

        }
}

export default withAuth(connect(mapStateToProps, { getEvents, postLoginInfo })(MyPlaydates));
