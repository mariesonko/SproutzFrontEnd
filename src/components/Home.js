import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

// import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Responsive, Segment, Sidebar, Visibility } from 'semantic-ui-react'
// import ImageAnimation from '../modules/ImageAnimation'
// import styled from 'styled-components';
// import PropTypes from 'prop-types'


class Home extends Component {
  render(){
    return(
      <Grid>
        <Jumbotron>
          <h2> Welcome to Sproutz </h2>
          <p>fun time ready set let's create playdates</p>
        </Jumbotron>

      </Grid>
    )
  }

}
// const Wrapper = styled.div`
// `;


// class Home extends Component {
//
//   componentWillMount() {
//     this.setState({
//       startFirstBoxAnimation: false,
//       startSecondBoxAnimation: true,
//     });
//   }
//
//   render() {
//
//     const {
//      startFirstBoxAnimation,
//      startSecondBoxAnimation,
//    } = this.state;
//
//     return (
//
//       <Container text>
//         <Wrapper>
//          <ImageAnimation
//            image={'https://www.culture.ru/storage/images/d822a63a2006694f05787fcde046dc14/946ac219e469a5cb515b1292280373bb.jpg'}
//            width={600}
//            height={400}
//            noOfRows={8}
//            speed={200}
//            startAnimation={startFirstBoxAnimation}
//            onMouseOver={() => this.setState({ startFirstBoxAnimation: !startFirstBoxAnimation })}
//          />
//          {/* <ImageAnimation
//            image={'https://www.culture.ru/storage/images/d822a63a2006694f05787fcde046dc14/946ac219e469a5cb515b1292280373bb.jpg'}
//            width={`20vw`}
//            height={`15vw`}
//            noOfRows={4}
//            speed={100}
//            startAnimation={startSecondBoxAnimation}
//            onMouseOver={() => this.setState({ startSecondBoxAnimation: !startSecondBoxAnimation })}
//          /> */}
//
//          <Button primary size='huge'>
//            Get Started
//            <Icon name='right arrow' />
//          </Button>
//          </Wrapper>
//   </Container>
// )
//
// Home.propTypes = {
//   mobile: PropTypes.bool,
// }
//
//   }
// }

export default Home;
