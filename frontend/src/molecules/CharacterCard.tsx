import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

// WIP: Change types to what they should be based on api!!!
export type CharacterCardProps = {
  image?: string;
  id: string;
  name: string;
  alignment: string;
  raceName: string;
  className: string;
  description?: string;
};

const CharacterCard = ({
  image = "https://via.placeholder.com/500",
  id,
  name,
  alignment,
  raceName,
  className,
  description,
}: CharacterCardProps): JSX.Element => {
  return (
    <Card as={Link} to={`/app/characters/${id}`}>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{`${alignment} ${className} ${raceName}`}</Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CharacterCard;
