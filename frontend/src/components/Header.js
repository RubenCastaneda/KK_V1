import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Navbar style={{ backgroundColor: 'lightgray' }} expand="lg">
        <Container fluid className="d-flex justify-content-between align-items-center">
          <Nav>
            <Nav.Link href="/left">Drop Down</Nav.Link>
          </Nav>
          <Navbar.Text className="mx-auto">Welcome</Navbar.Text>
          <Nav>
            <Nav.Link href="/right">Account</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
