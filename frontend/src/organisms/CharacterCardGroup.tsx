import React from 'react';
import { Card } from 'semantic-ui-react';
import CharacterCard, {CharacterCardProps} from '../molecules/CharacterCard';

export type CharacterCardGroupProps = {
  characters: CharacterCardProps[];
};

const CharacterCardGroup = ({
  characters,
}: CharacterCardGroupProps): JSX.Element => {
  return (
    <Card.Group>
      {characters.map(c => <CharacterCard {...c} />)}
    </Card.Group>
  );
};

export default CharacterCardGroup;
