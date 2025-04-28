import ActionButton from '../components/ActionButton';
import NewsletterHero from '../components/NewsletterHero';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          height: '80vh',
          backgroundImage: 'url(/images/your-hero-image.jpg)', // Replace with your hero image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '2rem',
          fontFamily: "'Playfair Display', serif",
        }}
      >
        Elevate Your Natural Beauty
      </section>

      {/* Buttons Section */}
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        <ActionButton label="Coming Soon" />
        <ActionButton label="Coming Soon" />
        <ActionButton label="About Us" path="/about" />
      </div>

      {/* Newsletter Section */}
      <NewsletterHero />
    </div>
  );
}
