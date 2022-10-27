import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CharacterCard, { CharacterCardProps } from '../molecules/CharacterCard';

const EditCharacterPage = (): JSX.Element => {
  const character = useLoaderData() as CharacterCardProps;

  return (
    <div>
      <CharacterCard {...character} />
    </div>
  );
};

export default EditCharacterPage;
