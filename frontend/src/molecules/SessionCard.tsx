import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import { CharacterCardProps } from './CharacterCard';

// WIP: Change types to what they should be based on api!!!
export type user = {
  id: string;
  username: string;
  password: string
}
export type SessionCardProp = {
  image?: string;
  id: string;
  name: string;
  players?: user[];
  characters?: CharacterCardProps[];
  description?: string;
};

const CharacterCard = ({
  image = "https://via.placeholder.com/500",
  id,
  name,
  description
}: SessionCardProp): JSX.Element => {
  return (
    <Card as={Link} to={`/app/sessions/${id}`}>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{id}</Card.Header>
        <Card.Meta>{`${name}`}</Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CharacterCard;