import React, { useState, useEffect, FC } from 'react';
import { Nav, Brand, NavLink, NavLinks, NavAction } from './navbar.styles';
import Link from 'next/link';

const Navbar: FC = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  useEffect(() => {
    document.addEventListener('scroll', setTransparency);
    return () => {
      document.removeEventListener('scroll', setTransparency);
    };
  }, []);
  function setTransparency() {
    const isScrolled = window.scrollY < 100;
    setIsTransparent(isScrolled);
  }
  return (
    <Nav transparent={isTransparent} data-transparent={isTransparent}>
      <Brand transparent={isTransparent} />
      <NavLinks>
        <Link href="/about-us">
          <NavLink transparent={isTransparent}>Home</NavLink>
        </Link>
        <Link href="/about-us">
          <NavLink transparent={isTransparent}>Services</NavLink>
        </Link>
        <Link href="/about-us">
          <NavLink transparent={isTransparent}>About Us</NavLink>
        </Link>
        <Link href="/about-us">
          <NavLink transparent={isTransparent}>Contact Us</NavLink>
        </Link>
      </NavLinks>
      <NavAction transparent={isTransparent}>BOOK A CALL</NavAction>
    </Nav>
  );
};

export default Navbar;
