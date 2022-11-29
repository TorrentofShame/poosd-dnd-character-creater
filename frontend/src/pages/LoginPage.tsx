import React from 'react';
import { Link, Form as RForm, useSubmit } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

const LoginPage = (): JSX.Element => {
  const submit = useSubmit();
  return (
    <Grid textAlign="center" style={{height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{maxWidth: 450}}>
        <Header as="h2" color="teal" textAlign="center">
          Login to Account
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

            <Button type='submit' color='teal' fluid size='large' onClick={e => submit(e.currentTarget)}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to={{pathname: '/signup'}}>Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginPage;
