import React from 'react';
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { postNewParent, postNewFamily } from '../actions';

  const styles = {
    root: {
      marginTop: '5%'
    }
  }
  const options2 = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]

    class Signup extends React.Component{
      constructor(){
        super()
        this.state = {
            title: '', lastname: '', firstname: '', dateOfBirth: '',
            cellPhone: '', gender:'', address: '', city: '', state: '',
            zipCode: '', country:'', email:'', password: ''
        }
      }

     handleSubmitSignup = (e) => {
        console.log(e.target.value)
        e.preventDefault;
        const newParent = {
          lastName: this.state.lastName,
          firstName: this.state.firstName,
          dateOfBirth: this.state.dateOfBirth,
          cellPhone: this.state.cellPhone,
          gender: this.state.gender,
          address: this.state.address,
          city: this.state.city,
          state: this.state.state,
          zipCode: this.state.zipCode,
          country: this.state.country,
          email: this.state.email,
          password: this.state.password
      }

      const newFamily = () => {
        title: this.state.title
      }

      this.props.postNewParent(newParent);
      this.props.postNewFamily(newFamily);

    }

      handleChange = (e) => {
        console.log(e.target.name);
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      handleChangeDropDown = (e) =>{
        this.setState({
          [e.target.name]: [e.target.innerText]
        })
      }

      render() {
        // console.log(this.props);
        return(
      <Grid centered style={styles.root}>
        <Grid.Column width={6}>
          <Form onSubmit={this.handleSubmitSignup}>
            <Form.Field>
              <label>Family Title</label>
              <input onChange={this.handleChange} type='Last Name' placeholder='Enter Family Last Name here .....' name='title' value={this.state.title}/>
            </Form.Field>
            <Form.Group widths={2}>
              <Form.Input onChange={this.handleChange} fluid label='First name' placeholder=' First name' name='firstName' value={this.state.firstName}/>
              <Form.Input onChange={this.handleChange} fluid label='Last name' placeholder='Last name' name='lastName' value={this.state.lastName}/>
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input onChange={this.handleChange} type='date' fluid label='Date of Birth' placeholder='Date of Birth' name='dateOfBirth' value={this.state.dateOfBirth}/>
              <Form.Select onChange={this.handleChangeDropDown} fluid label='gender' placeholder='Gender' options={options2}  name='gender' value={this.gender}/>
            </Form.Group>
            <Form.Field>
              <label>Email</label>
              <input onChange={this.handleChange} type='email' placeholder='Enter Email here ...' name='email' value={this.state.email}/>
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input onChange={this.handleChange}  type='password' placeholder='Enter Password here ...' name='password' value={this.state.password}/>

            </Form.Field>
            <Form.Field>
              <label>Confirm Password</label>
              <input  onChange={this.handleChange} type='password' placeholder='Confirm Password here ...' name='password' value={this.state.password}/>
            </Form.Field>
            <Form.Group widths={2}>
              <Form.Input onChange={this.handleChange} label='Address' placeholder='Address' name='address' value={this.state.address}/>
            </Form.Group>
            <Form.Group widths={4}>
              <Form.Input onChange={this.handleChange} label='City' placeholder='City' name='city' value={this.state.city}/>
              <Form.Input onChange={this.handleChange} label='State' placeholder='State' name='state' value={this.state.state}/>
                <Form.Input onChange={this.handleChange} label='Country' placeholder='Country' name='country' value={this.state.country}/>
            </Form.Group>
            <Form.Group widths={4}>
              <Form.Input onChange={this.handleChange} label='ZipCode' placeholder='ZipCode' name='zipCode' value={this.state.zipCode} />
              <Form.Input onChange={this.handleChange} label='Phone' placeholder='555-555-5555' name='cellPhone' value={this.state.cellPhone}/>
            </Form.Group>
            <Form.Field>
              <Checkbox onChange={this.handleChangeDropDown} label='I agree to the Terms and Conditions'/>
            </Form.Field>
            <Button type='submit'>Signup</Button>
          </Form>
        </Grid.Column>

      </Grid>
      );
    }
  }

  const mapStateToProps = (state) => {
    // console.log(state);
    return {
          families: state.families.family,
          parents: state.families.parents,
          children: state.families.children
      }
  }

  export default connect(mapStateToProps, { postNewParent, postNewFamily })(Signup);
