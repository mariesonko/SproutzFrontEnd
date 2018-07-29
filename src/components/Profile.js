import React from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './Profile.css';

class Profile extends React.Component {

  render() {

    return (
      <div id='profile'>
        <Image src="" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/person-1.jpg" className="about-profile-pic" rounded />
            <h3>Family Profile info</h3>
            <p>Parent Info</p>
            <p>Children Info</p>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default Profile
