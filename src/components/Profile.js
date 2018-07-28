import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { postNewParent, postNewChild } from '../actions';

    const options2 = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' },
    ]

class Profile extends Component {

      constructor(){
        super()
        this.state = {
         firstName: '', lastName: '', dateOfBirth: '', gender:'',
         cellPhone: '', address: '', city: '', state: '', zipCode: '', country:'', email:'', childFirstName:'', childLastName: '', childDateOfBirth:'', childGender:'',medicalConditions:'', family_id:5
        }
      }

      handleSubmitProfile = (e) => {

         e.preventDefault;
         const newParent = {
           family_id: this.state.family_id,
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
           email: this.state.email
       }

       const newChild = {
          family_id: this.state.family_id,
          childFirstName: this.state.childFirstName,
          childLastName: this.state.childLastName,
          childDateOfBirth: this.state.childDateOfBirth,
          childGender: this.state.childGender,
          medicalConditions: this.state.medicalConditions
       }

       this.props.postNewParent(newParent);
       this.props.postNewChild(newChild);
         this.props.history.push('/MyPlaydates')

     }

       handleChange = (e) => {
         console.log(e.target.name);
         this.setState({
           [e.target.name]: e.target.value
         })
       }

       handleChangeDropDown (str) {
         return (e) => {
           this.setState({
               [str]: e.target.innerText
             })
         }
       }

  render() {
    const styles = {
      root: {
        marginTop: '10%'
      }
    }

    const options = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' },
    ]

    return (

          <Form onSubmit={this.handleSubmitProfile}>
             <Form.Group widths={4}>
              <Form.Input onChange={this.handleChange} fluid label='Parent First name' placeholder='Parent First name' name='firstName' value={this.state.firstName}/>
              <Form.Input onChange={this.handleChange} fluid label='Parent Last name' placeholder='Parent Last name' name='lastName' value={this.state.lastName}/>
            </Form.Group>

            <Form.Group widths={4}>
              <Form.Input onChange={this.handleChange} type='date' fluid label='Date of Birth' placeholder='Date of Birth' name='dateOfBirth' value={this.dateOfBirth}/>
              <Form.Select onChange={this.handleChangeDropDown('gender')} fluid label='gender' placeholder='Gender' name='gender' value={this.gender} options={options} />
            </Form.Group>

            <Form.Group widths={4}>
              <Form.Input onChange={this.handleChange} fluid label='Phone Number' placeholder='555-555-5555' name='cellPhone' value={this.cellPhone}/>
                <Form.Input onChange={this.handleChange} fluid label='Email' placeholder='Enter your email address....' name='email' value={this.email}/>
            </Form.Group>

            <Form.Group widths={2}>
              <Form.Input onChange={this.handleChange} label='Address' placeholder='Address' name='address' value={this.state.address}/>
            </Form.Group>

            <Form.Group widths={4}>
              <Form.Input onChange={this.handleChange} label='City' placeholder='City' name='city' value={this.state.city}/>
              <Form.Input onChange={this.handleChange} label='State' placeholder='State' name='state' value={this.state.state}/>
            </Form.Group>

            <Form.Group widths={4}>
              <Form.Input onChange={this.handleChange} label='ZipCode' placeholder='ZipCode' name='zipCode' value={this.state.zipCode}/>
            <Form.Input fluid onChange={this.handleChange} label='Country' placeholder='country' name='country' value={this.state.country} />
          </Form.Group>

        <h3>Please enter your child's info</h3>

        <Form.Group widths={4}>
         <Form.Input onChange={this.handleChange} fluid label='Child First name' placeholder='Child First name' name='childFirstName' value={this.state.childFirstName}/>
         <Form.Input onChange={this.handleChange} fluid label='Child Last name' placeholder='Child Last name' name='childLastName' value={this.state.childLastName}/>
       </Form.Group>

        <Form.Group widths={2}>
          <Form.Input onChange={this.handleChange} type='date' fluid label='Date of Birth' placeholder='Date of Birth' name='childDateOfBirth' value={this.childDateOfBirth}/>
        </Form.Group>

        <Form.Group widths={4}>
          <Form.Select onChange={this.handleChangeDropDown('childGender')} fluid label=' gender' placeholder='Gender' name='childGender' value={this.childGender} options={options} />
        </Form.Group>

      <Form.Group widths={2}>
        <Form.Input onChange={this.handleChange} label='Medical Conditions' placeholder='Medical Conditions' name='medicalConditions' value={this.state.medicalConditions} />
      </Form.Group>

        <Form.Group widths={4}>
        <Form.Checkbox label='I agree to the Terms and Conditions'  />
      </Form.Group>
    <Button type='submit'>Submit</Button>
  </Form>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
        parents: state.families.parents,
        children: state.families.children
    }
}

export default connect(mapStateToProps, { postNewParent, postNewChild })(Profile);
