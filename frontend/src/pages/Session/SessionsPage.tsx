import React from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { Button, Container, Divider, Header } from 'semantic-ui-react';
import { SessionCardProp } from '../../molecules/SessionCard';
import SessionCardGroup from '../../organisms/SessionCardGroup';

const Dashboard = (): JSX.Element => {
  const chars = useLoaderData() as SessionCardProp[];
  return (
    <>
      <Container fluid>
        <Header>Sessions</Header>
        <Form method="post">
          <Button>New Session/Delete Session</Button>
        </Form>
      </Container>
      <Divider />
      <SessionCardGroup sessions = {chars} />
    </>
  );
};

export default Dashboard;
