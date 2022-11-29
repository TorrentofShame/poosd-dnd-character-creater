import React from 'react';
import { Form, Link, useLoaderData } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import SessionCard, { SessionCardProp } from '../../molecules/SessionCard';
import CharacterCardGroup from '../../organisms/CharacterCardGroup';

const SessionPage = (): JSX.Element => {
  const session = useLoaderData() as SessionCardProp;
  return (
    <div>
        <div>{session.id}</div>
        <Form method="post">
          <Button>Join/Leave</Button>
        </Form>
        <ul>
          <li>players:</li>
          {session.players?.map(player => {
            return (
              <li>{player.id}</li>
            )
          })}
        </ul>
        {session.characters==undefined?<></>:<CharacterCardGroup characters={session.characters} />}
        
  </div>
  );
};

export default SessionPage;

