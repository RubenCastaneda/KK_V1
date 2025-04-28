import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  transition: all 0.3s ease;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 25px;
  margin-right: 0.5rem;
  transition: opacity 0.3s ease;
`;

const BrandName = styled.span`
  font-size: 25px;
  font-family: 'Playfair Display', serif;
  letter-spacing: 1px;
  transition: color 0.3s ease;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    margin-left: 1.5rem;
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    transition: color 0.3s ease;
  }
`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = scrolled ? 'black' : 'white';

  return (
    <HeaderContainer
      style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.08)' : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <LogoContainer>
        {/* Both logos are rendered, but only one is visible at a time */}
        <Logo
          src="/iamges/logo_wht.png"
          alt="KK Logo White"
          style={{ opacity: scrolled ? 0 : 1, position: 'absolute' }}
        />
        <Logo
          src="/images/logo_blk.png"
          alt="KK Logo Black"
          style={{ opacity: scrolled ? 1 : 0 }}
        />
        <BrandName style={{ color: textColor }}>BEAUTY LAB</BrandName>
      </LogoContainer>

      <NavLinks>
        <Link to="/" style={{ color: textColor }}>Home</Link>
        <Link to="/about" style={{ color: textColor }}>About</Link>
      </NavLinks>
    </HeaderContainer>
  );
}
