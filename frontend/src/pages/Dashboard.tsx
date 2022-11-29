import React from 'react';
import { Form, redirect, useLoaderData } from 'react-router-dom';
import { Button, Container, Divider, Header } from 'semantic-ui-react';
import { address } from '../API/address';
import { CharacterCardProps } from '../molecules/CharacterCard';
import CharacterCardGroup from '../organisms/CharacterCardGroup';

const Dashboard = (): JSX.Element => {
  const chars = useLoaderData() as CharacterCardProps[];
  return (
    <>
    <a href={`https://poosd.torrentofshame.com/app/sessions`}>sessions</a>
      <Container fluid>
        <Header>Characters</Header>
        <Form method="post">
          <Button>New</Button>
        </Form>
      </Container>
      <Divider />
      <CharacterCardGroup characters={chars} />
    </>
  );
};

export default Dashboard;
