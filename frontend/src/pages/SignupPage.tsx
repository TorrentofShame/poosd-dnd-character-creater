import React from 'react';
import { Link, Form as RForm, useSubmit } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

const SignupPage = (): JSX.Element => {
  const submit = useSubmit();
  return (
    <Grid textAlign="center" style={{height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{maxWidth: 450}}>
        <Header as="h2" color="teal" textAlign="center">
          Signup
        </Header>
        <Form as={RForm} size="large" method="post">
          <Segment stacked>
            <Form.Input fluid name="email" icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              name="password"
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              />
            <Form.Input
              fluid
              name="passwordConfirm"
              icon='lock'
              iconPosition='left'
              placeholder='Confirm Password'
              type='password'
              />

            <Button type='submit' color='teal' fluid size='large' onClick={e => submit(e.currentTarget)}>
              Signup
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have an account? <Link to={{pathname: '/login'}}>Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default SignupPage;
