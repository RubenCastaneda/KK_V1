import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductGroupsHero from '../components/ProductGroupsHero';
import NewsletterHero from '../components/NewsletterHero';

function Home() {
  const navigate = useNavigate();

  const heroData = useMemo(() => [
    {
      title: 'KK Beauty Lab',
      subtitle: 'Elevate your natural beauty',
      backgroundImages: [
        '/images/Main-p1.jpg',
        '/images/home_img2o.jpg',
        '/images/home_img3o.jpg',
        '/images/home_img4o.jpg',
      ],
      path: null
    },
    {
      title: "KK Beauty's Selection",
      subtitle: 'Our best products chosen by our experts',
      backgroundImage: '/images/gold_o.jpg',
      buttonText: 'Coming Soon',
      path: null
    },
    {
      title: 'Build Your Own Routine',
      subtitle: 'Build a routine specialized for your skin type and needs',
      backgroundImage: '/images/dream_o.jpg',
      buttonText: 'Coming Soon',
      path: null
    },
    {
      title: 'About Us',
      subtitle: 'Discover the heart and story behind KK Beauty Lab',
      backgroundImage: '/images/blue_o.jpg',
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
          backgroundImages={hero.backgroundImages}
          buttonText={hero.buttonText}
          onButtonClick={() => {
            if (hero.path) {
              navigate(hero.path);
            }
          }}
        />
      ))}

      <NewsletterHero />
    </div>
  );
}

export default Home;
