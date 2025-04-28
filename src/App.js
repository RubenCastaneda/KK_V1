import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import ProductGroupsHero from './components/ProductGroupsHero';
import NewPage from './components/NewPage';
import AboutUsPage from './components/AboutUsPage'; // ✅ NEW
import NewsletterHero from './components/NewsletterHero';

function HomePage() {
  const navigate = useNavigate();

  const heroData = useMemo(() => [
    {
      title: '',
      subtitle: '',
      backgroundImage: '/images/Mainpic1.jpg',
      onButtonClick: () => navigate('/new-page')
    },
    {
      title: 'KK Beauty\'s Selection',
      subtitle: 'Our best products chosen by our experts',
      backgroundImage: '/images/chatprod.png',
      buttonText: 'View Selection',
      onButtonClick: () => navigate('/new-page')
    },
    {
      title: 'Build Your Own Routine',
      subtitle: 'Build a routine spesialized for your skin type and needs',
      backgroundImage: '/images/White1.png',
      buttonText: 'Coming Soon',
      onButtonClick: () => navigate('/new-page')
    },
    {
      title: 'About Us',
      subtitle: 'Learn more about our story and our mission to provide the best skincare products.',
      backgroundImage: '/images/Blue1.png',
      buttonText: 'KK Beauty Lab',
      onButtonClick: () => navigate('/about') // ✅ UPDATED
    }
  ], [navigate]);

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      {heroData.map((hero, index) => (
        <div key={index}>
          <ProductGroupsHero
            title={hero.title}
            subtitle={hero.subtitle}
            backgroundImage={hero.backgroundImage}
            buttonText={hero.buttonText}
            onButtonClick={hero.onButtonClick}
          />
          {index === 3 && (
            <div style={{ position: 'relative', zIndex: 2 }}>
              <NewsletterHero />
              <div style={{ height: '38vh' }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-page" element={<NewPage />} />
        <Route path="/about" element={<AboutUsPage />} /> {/* ✅ NEW */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
