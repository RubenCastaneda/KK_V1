import { Container, Button } from 'react-bootstrap';

function ProductGroupsHero({ title, subtitle, backgroundImage, buttonText, onButtonClick }) {
  const hasBackgroundImage = Boolean(backgroundImage);

  return (
    <div
      style={{
        background: hasBackgroundImage
          ? `url(${backgroundImage}) center/cover no-repeat`
          : '#ffffff', // fallback white
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <Container>
        <h1
          style={{
            color: hasBackgroundImage ? 'white' : 'black',
            textShadow: hasBackgroundImage ? '2px 2px 12px rgba(0,0,0,0.8)' : 'none',
            fontSize: '4rem',
            fontFamily: `'Playfair Display', serif`,
            fontWeight: '200',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          {title}
        </h1>
        <p
          className="lead"
          style={{
            color: hasBackgroundImage ? 'white' : 'black',
            textShadow: hasBackgroundImage ? '1px 1px 10px rgba(0,0,0,0.7)' : 'none',
            fontSize: '1.5rem',
            fontWeight: '200',
            fontFamily: `'Playfair Display', serif`,
          }}
        >
          {subtitle}
        </p>
        {buttonText && (
          <Button
            variant={hasBackgroundImage ? 'light' : 'dark'}
            onClick={onButtonClick}
            style={{
              marginTop: '1.5rem',
              padding: '0.75rem 2rem',
              fontWeight: '100',
              fontFamily: `'DM Sans', sans-serif`,
            }}
          >
            {buttonText}
          </Button>
        )}
      </Container>
    </div>
  );
}

export default ProductGroupsHero;
