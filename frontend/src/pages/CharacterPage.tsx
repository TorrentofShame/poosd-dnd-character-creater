import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CharacterCard, { CharacterCardProps } from '../molecules/CharacterCard';

const CharacterPage = (): JSX.Element => {
  const character = useLoaderData() as CharacterCardProps;

  return (
    <div>
    {Object.entries(character).map(([k,v]) => {
        return <div>{k} : {v}</div>
      })
    }
  </div>
  );
};

export default CharacterPage;

