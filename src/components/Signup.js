import React from 'react';
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react';

  const styles = {
    root: {
      marginTop: '5%'
    }
  }
  const options2 = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]

    const Signup = () => (
      <Grid centered style={styles.root}>
        <Grid.Column width={6}>
          <Form>
            <Form.Field>
              <label>Family Title</label>
              <input type='Last Name' placeholder='Enter Family Last Name here .....'/>
            </Form.Field>
            <Form.Group widths={2}>
              <Form.Input fluid label='First name' placeholder=' First name'/>
              <Form.Input fluid label='Last name' placeholder='Last name' />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input type='date' fluid label='Date of Birth' placeholder='Date of Birth'/>
              <Form.Select fluid label='gender' placeholder='Gender' options={options2} />
            </Form.Group>
            <Form.Field>
              <label>Email</label>
              <input type='email' placeholder='Enter Email here ...'/>
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type='password' placeholder='Enter Password here ...'/>

            </Form.Field>
            <Form.Field>
              <label>Confirm Password</label>
              <input type='password' placeholder='Confirm Password here ...'/>
            </Form.Field>
            <Form.Group widths={2}>
              <Form.Input label='Address' placeholder='Address' />
            </Form.Group>
            <Form.Group widths={4}>
              <Form.Input label='City' placeholder='City' />
              <Form.Input label='State' placeholder='State' />
                <Form.Input label='Country' placeholder='Country' />
            </Form.Group>
            <Form.Group widths={4}>
              <Form.Input label='ZipCode' placeholder='ZipCode' />
              <Form.Input label='Phone' placeholder='555-555-5555' />
            </Form.Group>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions'/>
            </Form.Field>
            <Button type='submit'>Signup</Button>
          </Form>
        </Grid.Column>

      </Grid>
    )

export default Signup;
