import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import ImageAnimation from '../modules/ImageAnimation';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
`;

class Home extends Component {

  componentWillMount() {
      this.setState({
        startFirstBoxAnimation: false,
        startSecondBoxAnimation: true,
      });
    }

  render(){
    const {
         startFirstBoxAnimation,
         startSecondBoxAnimation,
       } = this.state;

    return(
      <div>
      <Grid>
        <Jumbotron>
            <h2> Welcome to Sproutz </h2> <br />
            <ImageAnimation
                      image={'assets/child-costume-fairy-127968.jpg'}
                      width={600}
                      height={400}
                      noOfRows={8}
                      speed={200}
                      startAnimation={startFirstBoxAnimation}
                      onMouseOver={() => this.setState({ startFirstBoxAnimation: !startFirstBoxAnimation })}
                    className="header-image" />
            {/* <Image src="assets/child-costume-fairy-127968.jpg" className="header-image" /> */}
          <h3>Ready -> Jet -> Play Time!</h3>
          <Link to="/Signup">
            <Button bsStyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={6} className="person-wrapper">
            <Image src="assets/boy.jpeg" circle className="profile-pic"/>
            <h3>Adventure </h3>
            <p>We don't really know where this goes - and I'm not sure we really care. A little happy sunlight shining through there. Who really cares when she ocean caresses my little delicate face - What a delighful breeze.</p>
          </Col>
          <Col xs={12} sm={6} className="person-wrapper">
            <Image src="assets/children-girls-kids-50581.jpg" circle className="profile-pic"/>
            <h3> Nature</h3>
            <p>Have fun with it. The only prerequisite is that it makes you happy. If it makes you happy then it's good. We have a fantastic little sky! I'm going to mix up a little color. Let just take a little walk!</p>
          </Col>
          <Col xs={12} sm={6} className="person-wrapper">
            <Image src="assets/baby-boys-childhood-160946.jpg" circle className="profile-pic"/>
            <h3> Exploration</h3>
            <p>We can bend rivers. Clouds are free.If you hypnotize it, it will go away. They just float around the sky all day and have fun. Let's build an almighty mountain. Get tough with it, get strong. This painting comes right out of your heart.</p>
          </Col>
          <Col xs={12} sm={6} className="person-wrapper">
            <Image src="assets/lollipops.jpeg" circle className="profile-pic"/>
            <h3> Deliciouness</h3>
            <p>All you have to do is let your imagination go wild. Don't fiddle with it all day. Let's make some happy little clouds in our world. Every single thing in the world has its own personality - and it is up to you to make friends with the little rascals.Ooooh Sweetness!!!</p>
          </Col>
        </Row>
      </Grid>
      </div>
    )
  }

}




export default Home;
