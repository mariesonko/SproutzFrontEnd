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
          <Form.Input fluid label='First name' placeholder='First name'/>
          <Form.Input fluid label='Last name' placeholder='Last name' />
        </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label='Address' placeholder='Address' />
    </Form.Group>
    <Form.Group widths={4}>
      <Form.Input label='City' placeholder='City' />
      <Form.Input label='State' placeholder='State' />
    </Form.Group>
    <Form.Group widths={4}>
      <Form.Input label='ZipCode' placeholder='ZipCode' />
      <Form.Input label='Phone' placeholder='Phone' />
    </Form.Group>
    <Form.Group widths={4}>
    <Form.Select options={options} placeholder='Gender'  />
    <Form.Checkbox label='I agree to the Terms and Conditions'  />
  </Form.Group>
    <Button type='submit'>Submit</Button>
  </Form>
    );
  }
}

export default Profile;
