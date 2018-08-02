import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { postNewParent, postNewChild } from '../actions';
import withAuth from '../hocs/withAuth';

    const options2 = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' },
    ]

class Register extends Component {

      constructor(){
        super()
        this.state = {
         firstName: '', lastName: '', dateOfBirth: '', gender:'',
         cellPhone: '', address: '', city: '', state: '', zipCode: '', country:'', email:'', childFirstName:'', childLastName: '', childDateOfBirth:'', childGender:'',medicalConditions:'', family_id: 7
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
         this.props.history.push('/Welcome')

     }

       handleChange = (e) => {
         // console.log(e.target.name);
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
        <div className='login-form'>

      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
      <Grid textAlign='center' style={{ height: 'auto' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 700 }}>
          <Header as='h2' color='navy' textAlign='center'>
            <Image src='https://www.culture.ru/storage/images/d822a63a2006694f05787fcde046dc14/946ac219e469a5cb515b1292280373bb.jpg' circular/> Register Parent
          </Header>
          <Form size='large' onSubmit={this.handleSubmitProfile}>
            <Segment stacked>
              <Form.Input onChange={this.handleChange} fluid icon='Parent First name'   iconPosition='left' placeholder='Parent First name' name='firstName' value={this.state.firstName}/>
              <Form.Input onChange={this.handleChange} fluid icon='Parent Last name'   iconPosition='left' placeholder='Parent Last name' name='lastName' value={this.state.lastName}/>

              <Form.Input onChange={this.handleChange} type='date' fluid icon='Date of Birth'   iconPosition='left' placeholder='Date of Birth' name='dateOfBirth' value={this.dateOfBirth}/>
              <Form.Select onChange={this.handleChangeDropDown('gender')} fluid icon='gender'   iconPosition='left' placeholder='Gender' name='gender' value={this.gender} options={options} />

              <Form.Input onChange={this.handleChange} fluid icon='Phone Number'   iconPosition='left'  placeholder='555-555-5555' name='cellPhone' value={this.cellPhone}/>
                <Form.Input onChange={this.handleChange} fluid icon='Email'   iconPosition='left' placeholder='Enter your email address....' name='email' value={this.email}/>

              <Form.Input onChange={this.handleChange} fluid icon='Address' iconPosition='left' placeholder='Address' name='address' value={this.state.address}/>

              <Form.Input onChange={this.handleChange} fluid icon='City'   iconPosition='left' placeholder='City' name='city' value={this.state.city}/>
              <Form.Input onChange={this.handleChange} fluid icon='State'   iconPosition='left' placeholder='State' name='state' value={this.state.state}/>

              <Form.Input onChange={this.handleChange} icon='ZipCode' placeholder='ZipCode' name='zipCode' value={this.state.zipCode}/>
            <Form.Input  onChange={this.handleChange} fluid icon='Country'   iconPosition='left' placeholder='country' name='country' value={this.state.country} />

                <Header as='h2' color='navy' textAlign='center'>
                  <Image src='https://www.culture.ru/storage/images/d822a63a2006694f05787fcde046dc14/946ac219e469a5cb515b1292280373bb.jpg' circular/> Add Children
                </Header>

         <Form.Input onChange={this.handleChange} fluid icon='Child First name' iconPosition='left' placeholder='Child First name' name='childFirstName' value={this.state.childFirstName}/>
         <Form.Input onChange={this.handleChange} fluid icon='Child Last name'   iconPosition='left' placeholder='Child Last name' name='childLastName' value={this.state.childLastName}/>

          <Form.Input onChange={this.handleChange} type='date' fluid icon='Date of Birth'   iconPosition='left' placeholder='Date of Birth' name='childDateOfBirth' value={this.childDateOfBirth}/>

          <Form.Select onChange={this.handleChangeDropDown('childGender')} fluid icon=' gender'   iconPosition='left' placeholder='Gender' name='childGender' value={this.childGender} options={options} />

        <Form.Input onChange={this.handleChange}
          fluid
          icon='medicalConditions'
          iconPosition='left' placeholder='Medical Conditions' name='medicalConditions' value={this.state.medicalConditions} />

        <Form.Checkbox icon='I agree to the Terms and Conditions'  />

      <Button color='blue' fluid size='large' type='submit'>
        Submit
      </Button>
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
        parents: state.families.parents,
        children: state.families.children,
        current_family: state.auth.current_family
    }
}

export default withAuth(connect(mapStateToProps, { postNewParent, postNewChild })(Register));
