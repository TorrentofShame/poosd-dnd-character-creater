import React from 'react';
import { Form, Link, redirect, useLoaderData } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { CharacterCardProps } from '../../molecules/CharacterCard';
import SessionCard, { SessionCardProp } from '../../molecules/SessionCard';
import CharacterCardGroup from '../../organisms/CharacterCardGroup';

const HostPage = (): JSX.Element => {
  const session = useLoaderData() as SessionCardProp;
  const user = localStorage.getItem("id");
  return (
    <div>
        <div>{session.id}</div>
        
        {session.characters==undefined?<></>:<CharacterCardGroup characters={session.characters} />}
        
  </div>
  );
};

export default HostPage;

