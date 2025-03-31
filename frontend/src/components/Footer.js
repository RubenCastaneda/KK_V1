import React from 'react';
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';

const Footer = () => {
  // Inline style objects
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    fontSize: '0.9rem',
    paddingTop: '20px',
  };

  const subFooterStyle = {
    backgroundColor: '#444',
    padding: '10px 0',
  };

  const mainFooterStyle = {
    padding: '20px 0',
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '5px',
  };

  const inputStyle = {
    padding: '8px',
    marginRight: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    marginTop: '10px',
  };

  const footerBottomRowStyle = {
    borderTop: '1px solid #555',
    marginTop: '20px',
    paddingTop: '10px',
    alignItems: 'center',
  };

  const logoStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  };

  const logoLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
  };

  const socialMediaStyle = {
    textAlign: 'right',
  };

  const socialLinkStyle = {
    marginLeft: '15px',
    color: '#fff',
    textDecoration: 'none',
  };

  return (
    <footer role="contentinfo" style={footerStyle}>
      {/* Subfooter Section with Collapsible Panels */}

      {/* Main Footer Section */}
      <div style={mainFooterStyle}>
        <Container>
          <Row>
            <Col md={3}>
              <h5>Explore</h5>
              <ul style={listStyle}>
                <li>
                  <a href="/fashion" style={linkStyle}>
                    Fashion
                  </a>
                </li>
                <li>
                  <a href="/jewelry" style={linkStyle}>
                    Jewelry
                  </a>
                </li>
                <li>
                  <a href="/watches" style={linkStyle}>
                    Watches
                  </a>
                </li>
                <li>
                  <a href="/accessories" style={linkStyle}>
                    Accessories
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Boutique Services</h5>
              <ul style={listStyle}>
                <li>
                  <a href="/store-locator" style={linkStyle}>
                    Store Locator
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>About Us</h5>
              <ul style={listStyle}>
                <li>
                  <a href="/about" style={linkStyle}>
                    Company Info
                  </a>
                </li>
                <li>
                  <a href="/careers" style={linkStyle}>
                    Careers
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Legal</h5>
              <ul style={listStyle}>
                <li>
                  <a href="/privacy" style={linkStyle}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" style={linkStyle}>
                    Terms of Use
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row style={footerBottomRowStyle}>
            <Col md={6}>
              <div style={logoStyle}>
                <a href="/" style={logoLinkStyle}>
                  Your Logo
                </a>
              </div>
            </Col>
            <Col md={6} style={socialMediaStyle}>
              <a href="https://facebook.com" style={socialLinkStyle}>
                Facebook
              </a>
              <a href="https://twitter.com" style={socialLinkStyle}>
                Twitter
              </a>
              <a href="https://instagram.com" style={socialLinkStyle}>
                Instagram
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
