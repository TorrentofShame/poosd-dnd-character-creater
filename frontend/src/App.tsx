import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Header from './molecules/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Container style={{marginTop: '7em'}}>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
