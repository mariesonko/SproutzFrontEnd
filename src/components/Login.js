import React from 'react';
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react';

    const styles = {
      root: {
        marginTop: '5%'
      }
    }

    const LoginForm = () => (
      <Grid centered style={styles.root}>
        <Grid.Column width={6}>
          <Form>
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
            <Button type='submit'>Login</Button>
    
          </Form>
        </Grid.Column>

      </Grid>
    )

export default LoginForm;
