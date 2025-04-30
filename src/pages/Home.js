import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductGroupsHero from '../components/ProductGroupsHero';
import NewsletterHero from '../components/NewsletterHero';

function Home() {
  const navigate = useNavigate();

  const heroData = useMemo(() => [
    {
      title: 'KK Beauty Lab',
      subtitle: 'Elavate your natural beauty',
      backgroundImage: '/images/Main-p1.jpg',
      path: null
    },
    {
      title: 'KK Beauty\'s Selection',
      subtitle: 'Our best products chosen by our experts',
      backgroundImage: '/images/chatprod.png',
      buttonText: 'Coming Soon',
      path: null
    },
    {
      title: 'Build Your Own Routine',
      subtitle: 'Build a routine specialized for your skin type and needs',
      backgroundImage: '/images/White1.png',
      buttonText: 'Coming Soon',
      path: null
    },
    {
      title: 'About Us',
      subtitle: 'Discover the heart and story behind KK Beauty Lab',
      backgroundImage: '/images/Blue1.png',
      buttonText: 'Learn More',
      path: '/about'
    }
  ], []);

  return (
    <div>
      {heroData.map((hero, index) => (
        <ProductGroupsHero
          key={index}
          title={hero.title}
          subtitle={hero.subtitle}
          backgroundImage={hero.backgroundImage}
          buttonText={hero.buttonText}
          onButtonClick={() => {
            if (hero.path) {
              navigate(hero.path);
            }
          }}
        />
      ))}

      {/* Newsletter section placed OUTSIDE the heroes mapping */}
      <NewsletterHero />
    </div>
  );
}

export default Home;
