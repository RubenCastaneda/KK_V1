import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  display: ${props => (props.active ? 'block' : 'none')};
  transition: opacity 1s ease-in-out;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  color: white;
  font-family: 'Playfair Display', serif;
  z-index: 2;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.6);

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.75rem 1.5rem;
    background-color: white;
    color: black;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: #e3e3e3;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export default function ProductGroupsHero({
  title,
  subtitle,
  backgroundImage,
  backgroundImages,
  buttonText,
  onButtonClick
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = useMemo(() => {
    if (backgroundImages && backgroundImages.length > 0) return backgroundImages;
    if (backgroundImage) return [backgroundImage];
    return [];
  }, [backgroundImages, backgroundImage]);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <HeroWrapper>
      {images.map((img, idx) => (
        <SlideImage key={idx} src={img} alt={`slide-${idx}`} active={idx === currentIndex} />
      ))}

      <Content>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {buttonText && (
          <button onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </Content>
    </HeroWrapper>
  );
}
