import React from 'react';
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { postNewFamily } from '../actions';
// import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Responsive, Segment, Sidebar, Visibility } from 'semantic-ui-react'
// import ImageAnimation from '../modules/ImageAnimation'
// import styled from 'styled-components';
// import PropTypes from 'prop-types'


    class Signup extends React.Component{
      constructor(){
        super()
        this.state = {
            title: '',
            username:'',
            password: ''
        }
      }

     handleSubmitSignup = (e) => {
        console.log(e.target.value)
        e.preventDefault;
        const newFamily = {
          title: this.state.title,
          username: this.state.username,
          password: this.state.password
      }

      this.props.postNewFamily(newFamily);
      this.props.history.push('/profile')

    }

      handleChange = (e) => {
        console.log(e.target.name);
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      render() {

        return(
          <Form onSubmit={this.handleSubmitSignup}>
            <Form.Group widths={4}>
           <Form.Input onChange={this.handleChange} fluid label='Family Title' placeholder='Enter your family last name here....' name='title' value={this.state.title}/>
        </Form.Group>

          <Form.Group widths={4}>
            <Form.Input onChange={this.handleChange} fluid label='Username' placeholder='Enter username here.....' name='username' value={this.state.username}/>
          </Form.Group>

          <Form.Group widths={4}>
            <Form.Input  onChange={this.handleChange} fluid label='Password' placeholder='Enter password here ....' name='password' value={this.state.password}/>
          </Form.Group>

        <Form.Group widths={4}>
        <Form.Input  onChange={this.handleChange} fluid label='Confirm Password' placeholder='Confirm password here ....' name='password' value={this.state.password}/>
            </Form.Group>
            <Button type='submit'>Signup</Button>
          </Form>
      );
    }
  }

  const mapStateToProps = (state) => {
    // console.log(state);
    return {
          families: state.families.family
      }
  }


  export default connect(mapStateToProps, { postNewFamily })(Signup);

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
