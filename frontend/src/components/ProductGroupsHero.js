import { Container, Button } from 'react-bootstrap';

function ProductGroupsHero({ title, subtitle, backgroundImage, buttonText, onButtonClick }) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 0',
        color: '#fff',
        textAlign: 'center'
      }}
    >
      <Container>
        <h1>{title}</h1>
        <p className="lead">{subtitle}</p>
        {buttonText && (
          <Button variant="light" onClick={onButtonClick}>
            {buttonText}
          </Button>
        )}
      </Container>
    </div>
  );
}

export default ProductGroupsHero;
