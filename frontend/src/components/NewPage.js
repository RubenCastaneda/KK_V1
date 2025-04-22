import ProductGroupsHero from '../components/ProductGroupsHero.js';
import ScrollSection from '../components/ScrollSection.js';
import Footer from '../components/Footer.js';

export default function NewPage() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Scrollable content */}
      <div style={{ paddingBottom: '38vh', position: 'relative', zIndex: 1 }}>
        <ProductGroupsHero
          title="Discover the Elegance of KK Beauty"
          subtitle="Refined skincare begins here."
          backgroundImage="/images/prod_1.jpg"
          />

        <ScrollSection />

        {/* Last section triggers footer reveal */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <ProductGroupsHero
            title="Indulge in the Final Touch of Luxury"
            subtitle="Reveal your inner glow with our most exclusive products."
            backgroundImage="/images/prod_1.jpg"
            />
          {/* Extra space to allow scroll and footer visibility */}
          <div style={{ height: '0' }} />
        </div>
      </div>

      {/* Footer pinned behind */}
      <div style={{ position: 'absolute', bottom: 0, width: '100%', zIndex: 0 }}>
        <Footer />
      </div>
    </div>
  );
}
