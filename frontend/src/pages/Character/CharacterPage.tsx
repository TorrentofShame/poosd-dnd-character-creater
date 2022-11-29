import React from 'react';
import { Form, Link, useLoaderData } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import CharacterCard, { CharacterCardProps } from '../../molecules/CharacterCard';

const CharacterPage = (): JSX.Element => {
  const character = useLoaderData() as CharacterCardProps;

  return (
    <div>
      <Form method="post">
          <Button>Select Character</Button>
      </Form>
    {Object.entries(character).map(([k,v]) => {
        return <div>{k} : {v}</div>
      })
    }
  </div>
  );
};

export default CharacterPage;

