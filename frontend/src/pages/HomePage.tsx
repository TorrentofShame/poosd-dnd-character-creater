import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const HomePage = (): JSX.Element => {
  return (
    <div>
      <h1>Good app name</h1>
      <Button as={Link} to="/login">
        Login
      </Button>
      <Button as={Link} to="/signup">
        Signup
      </Button>
    </div>
  );
};

export default HomePage;
