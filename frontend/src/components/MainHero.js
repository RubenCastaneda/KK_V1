import React from 'react';
import { Container, Button } from 'react-bootstrap';

const MainHero = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("https://example.com/your-image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '120px 0',
        textAlign: 'center',
      }}
    >
      <Container>
        <h1 className="display-4 fw-bold">Welcome to MyApp</h1>
        <p className="lead mb-4">
          Discover amazing features and enjoy a seamless experience.
        </p>
        <Button variant="light" size="lg">
          Get Started
        </Button>
      </Container>
    </section>
  );
};

export default MainHero;
