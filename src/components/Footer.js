import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const sharedFont = `'Playfair Display', serif`;

  const footerStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 0',
    fontSize: '0.9rem',
    textAlign: 'center',
    zIndex: 0,
    pointerEvents: 'none',
    fontFamily: sharedFont, // apply to entire footer
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    marginBottom: '10px',
    display: 'inline-block',
    fontFamily: sharedFont,
  };

  const socialLinkStyle = {
    color: '#fff',
    margin: '0 10px',
    textDecoration: 'none',
    fontFamily: sharedFont,
  };

  const logoStyle = {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    textDecoration: 'none',
    display: 'inline-block',
    marginBottom: '20px',
    fontFamily: sharedFont,
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col>
            <a href="/" style={logoStyle}>Your Logo</a>
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <a href="/about" style={linkStyle}>About Us</a><br />
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="https://facebook.com" style={socialLinkStyle}>Facebook</a>
            <a href="https://twitter.com" style={socialLinkStyle}>Twitter</a>
            <a href="https://instagram.com" style={socialLinkStyle}>Instagram</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
