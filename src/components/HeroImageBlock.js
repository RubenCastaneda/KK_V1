import styled from 'styled-components';

const Hero = styled.section`
  height: 100vh;
  background: url(${props => props.bg}) center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Playfair Display', serif;
  text-align: center;
  padding: 2rem;

  h1 {
    font-size: 3rem;
    max-width: 600px;
    background: rgba(0,0,0,0.5);
    padding: 1rem;
    border-radius: 10px;
  }
`;

export default function HeroImageBlock({ bg, title }) {
  return (
    <Hero bg={bg}>
      <h1>{title}</h1>
    </Hero>
  );
}
