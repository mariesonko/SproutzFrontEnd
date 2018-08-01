import React from 'react';
import { postLoginInfo } from '../actions/index'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

    class LoginForm extends React.Component {

      constructor(){
        super()
        this.state ={
          username:'',
          password:''
        }
      }

      handleSubmit = (e) => {
        e.preventDefault;
        const loginInfo = {
          username: this.state.username,
          password: this.state.password
        }
        this.props.postLoginInfo(loginInfo)
      }

      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      render(){
        if (!this.props.current_family.id) {
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
              <Form size='large' onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Form.Input onChange={this.handleChange} fluid icon='family' iconPosition='left' placeholder='username' name='username' value={this.state.username}/>
                  <Form.Input onChange={this.handleChange}
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                  name='password' value={this.state.password}/>

                  <Button color='blue' fluid size='large'>
                    Login
                  </Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>)
  } else {
    return <Redirect to='/welcome'/>
  }
}
}


const mapStateToProps = (state) => {
  return { current_family: state.auth.current_family }
}

export default connect(mapStateToProps, { postLoginInfo })(LoginForm);
