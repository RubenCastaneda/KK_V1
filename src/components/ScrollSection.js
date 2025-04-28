import { useState } from 'react';
import styled from 'styled-components';


const SlideTrack = styled.div`
  display: flex;
  transition: transform 0.6s ease-in-out;
  transform: translateX(${props => `-${props.currentIndex * 100}%`});
`;

const Slide = styled.div`
  min-width: 100%;
  position: relative;
  color: white;
`;

const Image = styled.img`
  width: 50%;
  height: 500px;
  object-fit: cover;
  filter: brightness(100%);
`;

const Caption = styled.div`
  position: absolute; /* Change to absolute for precise positioning */
  top: 25%; /* Center vertically */
  right: 10%; /* Position it on the right side */  
  background: rgba(0, 0, 0, 0);
  padding: 1rem 2rem;
  border-radius: 10px;
  max-width: 50%;

  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: white; /* Set text color to white */
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: white; /* Set text color to white */
  }
`;
const CarouselWrapper = styled.div`
  position: relative; /* Ensures child elements are positioned relative to this container */
  width: 100%;
  overflow: hidden;
  background: #111;
  padding: 0rem 0;
`;

const Controls = styled.div`
  position: absolute; /* Position relative to the CarouselWrapper */
  bottom: 10px; /* 10px away from the bottom of the CarouselWrapper */
  right: 20%; /* Position it in the right half */
  display: flex;
  justify-content: center;
  gap: 0.5rem; /* Space between buttons */

  button {
    background: transparent;
    border: 1px solid white;
    padding: 0.5rem 1rem;
    color: white;
    cursor: pointer;
    border-radius: 5px; /* Optional: Rounded corners */
    transition: all 0.3s ease-in-out;

    &:hover {
      background: white;
      color: black;
    }
  }
`;
const slides = [
  {
    image: '/images/prod_1.jpg',
    title: 'First Slide Title',
    description: 'Luxury meets elegance in every product we offer.',
  },
  {
    image: '/images/prod_2.jpg',
    title: 'Second Slide Title',
    description: 'Nourish your skin with our scientifically backed formulas.',
  },
  {
    image: '/images/prod_3.jpg',
    title: 'Third Slide Title',
    description: 'Uncover the secrets to timeless beauty.',
  },
  {
    image: '/images/prod_4.jpg',
    title: 'First Slide Title',
    description: 'Luxury meets elegance in every product we offer.',
  },
  {
    image: '/images/prod_5.jpg',
    title: 'Second Slide Title',
    description: 'Nourish your skin with our scientifically backed formulas.',
  },
  {
    image: '/images/prod_6.jpg',
    title: 'Third Slide Title',
    description: 'Uncover the secrets to timeless beauty.',
  },
  {
    image: '/images/prod_7.jpg',
    title: 'First Slide Title',
    description: 'Luxury meets elegance in every product we offer.',
  },
  {
    image: '/images/prod_8.jpg',
    title: 'Second Slide Title',
    description: 'Nourish your skin with our scientifically backed formulas.',
  },
  {
    image: '/images/prod_9.jpg',
    title: 'Third Slide Title',
    description: 'Uncover the secrets to timeless beauty.',
  },
  {
    image: '/images/prod_10.jpg',
    title: 'Third Slide Title',
    description: 'Uncover the secrets to timeless beauty.',
  },
  {
    image: '/images/prod_11.jpg',
    title: 'Third Slide Title',
    description: 'Uncover the secrets to timeless beauty.',
  },

];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  return (
    <CarouselWrapper>
      <SlideTrack currentIndex={currentIndex}>
        {slides.map((slide, index) => (
          <Slide key={index}>
            <Image src={slide.image} alt={`Slide ${index + 1}`} />
            <Caption>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </Caption>
          </Slide>
        ))}
      </SlideTrack>
      <Controls>
        <button onClick={prevSlide}>‹ Prev</button>
        <button onClick={nextSlide}>Next ›</button>
      </Controls>
    </CarouselWrapper>
  );
}
