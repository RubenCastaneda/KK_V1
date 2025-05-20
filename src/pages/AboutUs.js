import ProductGroupsHero from '../components/ProductGroupsHero.js';
import { Container } from 'react-bootstrap';

export default function AboutUsPage() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Scrollable content */}
      <div style={{ paddingBottom: '0vh', position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <ProductGroupsHero
          title="Our Story Begins with Beauty"
          subtitle="At KK Beauty Lab, we blend science and luxury to elevate your skincare ritual."
          backgroundImage="/images/home_img3o.jpg"
        />

        {/* About Section */}
        <Container style={{ padding: '4rem 1.5rem', color: 'black', backgroundColor: 'white', fontFamily: `'DM Sans', sans-serif` }}>
          <h2 style={{ fontFamily: `'Playfair Display', serif`, fontWeight: '600', fontSize: '2.5rem', marginBottom: '1rem' }}>
            Who We Are
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            KK Beauty Lab was founded with a mission to redefine luxury skincare. 
            What started as a passion project quickly became a pursuit for excellence in skin science and self-care.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Our philosophy is rooted in the belief that beauty is timeless. That’s why we carefully craft our products with potent active ingredients, 
            minimal formulas, and elegant packaging — delivering results that speak for themselves.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Whether you're discovering us for the first time or have been with us since day one, we’re proud to be part of your journey to radiant skin.
          </p>
        </Container>

        {/* Optional Scroll Section (e.g. testimonials or values) */}

        {/* Final Wrap-up Section */}
        <ProductGroupsHero
          title="Rooted in Science, Refined in Beauty"
          subtitle="Our vision is clear — empower every individual to glow confidently."
          backgroundImage="/images/home_img4o.jpg" // blank = white background
        />

        {/* Footer Spacer */}
        <div style={{ height: '0' }} />
      </div>

      
    </div>
  );
}
