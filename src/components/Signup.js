import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
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
          <div className='login-form'>

        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
              <Image src='https://www.culture.ru/storage/images/d822a63a2006694f05787fcde046dc14/946ac219e469a5cb515b1292280373bb.jpg' circular/> Log-in to your account
            </Header>
          <Form size='large' onSubmit={this.handleSubmitSignup}>
            <Segment stacked>

           <Form.Input onChange={this.handleChange} fluid icon='Family Title' iconPosition='left' placeholder='Enter your family last name here....' name='title' value={this.state.title}/>


            <Form.Input onChange={this.handleChange} fluid icon='Username' iconPosition='left' placeholder='Enter username here.....' name='username' value={this.state.username}/>

            <Form.Input  onChange={this.handleChange} fluid icon='Password' iconPosition='left' placeholder='Enter password here ....' name='password' value={this.state.password}/>


        <Form.Input  onChange={this.handleChange} fluid icon='Confirm Password' iconPosition='left'
           placeholder='Confirm password here ....' name='password' value={this.state.password}/>
  
            <Button color='blue' fluid size='large' type='submit'>Signup</Button>
          </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
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
