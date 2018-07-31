import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

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
        console.log(this.state);
        const loginInfo = {
          username: this.state.username,
          password: this.state.password
        }
      }

      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      render(){
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
            <Image src='/logo.png' /> Log-in to your account
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
          {/* <Message>
            New to us? <a href='#'>Sign Up</a>
          </Message> */}
        </Grid.Column>
      </Grid>
    </div>


      )
    }
}

export default LoginForm;
