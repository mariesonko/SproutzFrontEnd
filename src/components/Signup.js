import React from 'react';
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { postNewFamily } from '../actions';

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
