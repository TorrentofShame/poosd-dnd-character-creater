import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import CharacterCard, { CharacterCardProps } from '../molecules/CharacterCard';

const CharacterPage = (): JSX.Element => {
  const character = useLoaderData() as CharacterCardProps;

  return (
    <div>
      <Button as={Link} to={`./edit`}>Edit</Button>
      <CharacterCard {...character} />
    </div>
  );
};

export default CharacterPage;

