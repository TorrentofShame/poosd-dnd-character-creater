import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

const Header = (): JSX.Element => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as={Link} to="/" header>
          Character Creator
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Header;
