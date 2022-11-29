import react from 'react';
import {  Form as RForm, useSubmit ,useLoaderData } from 'react-router-dom';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';

import CharacterCard, { CharacterCardProps } from '../../molecules/CharacterCard';

const EditCharacterPage = (): JSX.Element => {
  const character = useLoaderData() as CharacterCardProps;
  const submit = useSubmit();
  return (
    <Grid textAlign="center" style={{height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{maxWidth: 450}}>
        <Form as={RForm} size="large" method="post">
          <Segment stacked>
            <Form />
            {Object.entries(character).map(([k,v]) => {
              if(k=="link"){
                return <></>
              } 
              if(k==="id"){
                return <Form.Input fluid type="number"name={k} icon='bell' iconPosition='left' value={v}/>
              }
              if(k=="name"||k=="image"||k=="alignment"||k=="raceName"||k=="className"||k=="description"){
                return <Form.Input fluid type="text" name={k} icon='bell' iconPosition='left' placeholder={k+" : "+v}/>
              }
              return <Form.Input fluid type="number" name={k} icon='bell' iconPosition='left' placeholder={k+" : "+v}/>
            })}
            <Button type='submit' color='teal' fluid size='large'  onClick={e => submit(e.currentTarget)}>
              Edit Character
            </Button>
          </Segment>
          </Form>
      </Grid.Column>
    </Grid>
  );
};

export default EditCharacterPage;
