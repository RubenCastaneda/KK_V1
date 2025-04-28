import styled from 'styled-components';

const HeroWrapper = styled.section`
  height: 60vh;
  background: 
    linear-gradient(to bottom, rgb(255, 255, 255), #000),
    url('/images/newsletter-bg.jpg') center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: 'Playfair Display', serif;
  color: white;
  padding: 2rem;
`;


const NewsletterBox = styled.div`
  background: rgba(0, 0, 0, 0);
  padding: 2rem 3rem;
  border-radius: 15px;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0);

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1rem;
    line-height: 1.6;
    color: #e0e0e0;
  }

  input, button {
    padding: 0.8rem 1rem;
    margin-top: 0.5rem;
    font-family: inherit;
    font-size: 1rem;
    border: none;
    outline: none;
  }

  input {
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 8px;
  }

  button {
    background-color: white;
    color: black;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: #e3e3e3;
    }
  }
`;

export default function NewsletterHero() {
  return (
    <HeroWrapper>
      <NewsletterBox>
        <h2>Stay in the Glow</h2>
        <p>Be the first to hear about our latest drops, skincare tips, and exclusive offers.</p>
        <input type="email" placeholder="Enter your email" />
        <br />
        <button>Subscribe</button>
      </NewsletterBox>
    </HeroWrapper>
  );
}
