import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  width: 100%;
  height: 85vh;
  position: relative;
  overflow: hidden;
`;

const StaticBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const ScrollWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollImage = styled.div`
  flex: 0 0 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  scroll-snap-align: start;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  color: white;
  font-family: 'Playfair Display', serif;

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
`;

export default function ProductGroupsHero({
  title,
  subtitle,
  backgroundImage,
  backgroundImages,
  buttonText,
  onButtonClick
}) {
  const useSlider = backgroundImages && backgroundImages.length > 1;

  return (
    <HeroWrapper>
      {useSlider ? (
        <ScrollWrapper>
          {backgroundImages.map((img, idx) => (
            <ScrollImage key={idx} image={img} />
          ))}
        </ScrollWrapper>
      ) : (
        <StaticBackground image={backgroundImage || backgroundImages?.[0]} />
      )}
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
