import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import ProductGroupsHero from './components/ProductGroupsHero';
import MainHero from './components/MainHero';


function App() {
  const heroData = [
    {
      title: 'Welcome to My App',
      subtitle: 'Explore amazing features',
      backgroundImage: '/images/hero1.jpg',
      buttonText: 'Get Started',
      onButtonClick: () => alert('Getting started!')
    },
    {
      title: 'Our Services',
      subtitle: 'Check what we offer',
      backgroundImage: '/images/hero2.jpg',
      buttonText: 'Learn More',
      onButtonClick: () => alert('Learning more!')
    },
    {
      title: 'Join the Community',
      subtitle: 'Sign up and stay updated',
      backgroundImage: '/images/hero3.jpg',
      buttonText: 'Sign Up',
      onButtonClick: () => alert('Signing up!')
    },
  ];

  return (
    <>
      <Header />
      <MainHero />
      {heroData.map((hero, index) => (
        <ProductGroupsHero
          key={index}
          title={hero.title}
          subtitle={hero.subtitle}
          backgroundImage={hero.backgroundImage}
          buttonText={hero.buttonText}
          onButtonClick={hero.onButtonClick}
        />
      ))}

      <main className='py-4'>
        <Container className="text-center">
          <h1>My App</h1>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
