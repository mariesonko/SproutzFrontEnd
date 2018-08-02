import React, { Component } from 'react';
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { getEvents } from '../actions';
import { postLoginInfo } from '../actions/index';
import withAuth from '../hocs/withAuth';

class MyPlaydates extends Component {
  render( ) {

    return (
      <div>
        <h4>My Current Playdates</h4>


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
