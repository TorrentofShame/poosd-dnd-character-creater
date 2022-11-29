import React from 'react';
import { Card } from 'semantic-ui-react';
import SessionCard, {SessionCardProp} from '../molecules/SessionCard';

export type SessionCardGroupProps = {
  sessions: SessionCardProp[];
};

const SessionCardGroup = ({
  sessions,
}: SessionCardGroupProps): JSX.Element => {
  return (
    <Card.Group>
      {sessions.map(c => <SessionCard {...c} />)}
    </Card.Group>
  );
};

export default SessionCardGroup;
