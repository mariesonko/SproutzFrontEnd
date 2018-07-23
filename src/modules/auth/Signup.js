import React from 'react';
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react';

  const styles = {
    root: {
      marginTop: '5%'
    }
  }

    const Signup = () => (
      <Grid centered style={styles.root}>
        <Grid.Column width={6}>
          <Form>
            <Form.Field>
              <label>First Name</label>
              <input type='FirstName' placeholder='First Name'/>
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input type='LastName' placeholder='Last Name'/>
            </Form.Field>
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
              <input type='password' placeholder='Enter Confirm Password here ...'/>
            </Form.Field>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions'/>
            </Form.Field>
            <Button type='submit'>Signup</Button>
          </Form>
        </Grid.Column>

      </Grid>
    )

export default Signup;
