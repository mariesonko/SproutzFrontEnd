import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

class Profile extends Component {

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
      <Form>
        <Form.Group widths={4}>
          <Form.Input fluid label='Child First name' placeholder='Child First name'/>
          <Form.Input fluid label='Child Last name' placeholder='Child Last name' />
        </Form.Group>

        <Form.Group widths={2}>
          <Form.Input type='date' fluid label='Date of Birth' placeholder='Date of Birth'/>
        </Form.Group>
        <Form.Group widths={4}>
          <Form.Select fluid label='gender' placeholder='Gender' options={options} />
        </Form.Group>

    <Form.Group widths={2}>
      <Form.Input label='Medical Conditions' placeholder='Medical Conditions' />
    </Form.Group>

    <Form.Group widths={4}>
    <Form.Checkbox label='I agree to the Terms and Conditions'  />
  </Form.Group>
    <Button type='submit'>Submit</Button>
  </Form>
    );
  }
}

export default Profile;
