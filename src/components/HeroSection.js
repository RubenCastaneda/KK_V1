import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = () => {
  // Inline style objects
  const heroSectionStyle = {
    position: 'relative',
    overflow: 'hidden',
  };

  const parallaxContainerStyle = {
    height: '70vh',
    overflow: 'hidden',
  };

  const parallaxImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: 'scale(1.05)',
  };

  const overlayContentStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textShadow: '0 0 6px rgba(0, 0, 0, 0.6)',
  };

  const subtitleStyle = {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  };

  return (
    <div style={heroSectionStyle}>
      {/* Parallax Background */}
      <div style={parallaxContainerStyle}>
        <picture>
          <source
            media="(min-width: 961px)"
            srcSet="https://picsum.photos/id/1018/1920/1080"
          />
          <source
            media="(min-width: 601px)"
            srcSet="https://picsum.photos/id/1018/1280/720"
          />
          <img
            src="https://picsum.photos/id/1018/640/480"
            alt="Hero background"
            style={parallaxImageStyle}
          />
        </picture>
      </div>

      {/* Overlay Content */}
      <Container fluid style={overlayContentStyle}>
        <Row className="justify-content-center align-items-center h-100">
          <Col md={8} className="text-center">
            <h2 style={subtitleStyle}>Welcome</h2>
            <h1 style={titleStyle}>Discover Our New Collection</h1>
            <Button variant="primary" href="#learn-more">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
