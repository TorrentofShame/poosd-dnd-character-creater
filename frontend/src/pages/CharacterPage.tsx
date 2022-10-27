import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CharacterCard, { CharacterCardProps } from '../molecules/CharacterCard';

const CharacterPage = (): JSX.Element => {
  const character = useLoaderData() as CharacterCardProps;

  return (
    <div>
      <CharacterCard {...character} />
    </div>
  );
};

export default CharacterPage;

