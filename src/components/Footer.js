import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const sharedFont = `'Playfair Display', serif`;

  const footerStyle = {
    position: 'relative',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px 0',
    fontSize: '0.9rem',
    textAlign: 'center',
    zIndex: 0,
    fontFamily: sharedFont,
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
    transition: 'color 0.3s',
    fontFamily: sharedFont,
  };

  const logoStyle = {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    textDecoration: 'none',
    display: 'inline-block',
    marginBottom: '10px',
    fontFamily: sharedFont,
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col>
            <a href="/" style={logoStyle}>KK Beauty Lab</a>
            <p style={{ fontStyle: 'italic', fontSize: '1rem' }}>
              Elevate your natural beauty — luxurious skincare that enhances what’s already perfect
            </p>
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <a href="/about" style={linkStyle}>About Us</a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>Facebook</a>
            <a href="https://www.instagram.com/kkbeautylab_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>Instagram</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
