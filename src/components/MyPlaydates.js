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
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      }
    ]
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

    return (
      <div style={{ height: "100vh" }}>
    <BigCalendar

        events={this.state.events}
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
  return { events: state.events.items,
          current_family: state.auth.current_family
        }
}

export default withAuth(connect(mapStateToProps, { getEvents, postLoginInfo })(MyPlaydates));
