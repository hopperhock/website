import React, { SFC, useState, useEffect } from 'react';
import { Nav, Brand, NavLink, NavLinks, NavAction } from './navbar.styles';
import Link from 'next/link';

const Navbar: SFC = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const isScrolled = window.scrollY < 100;
      setIsTransparent(isScrolled);
    });
  }, []);
  return (
    <Nav transparent={isTransparent} aria-transparent={isTransparent}>
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
