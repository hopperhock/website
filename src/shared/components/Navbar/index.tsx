import React, { SFC, useState, useEffect } from 'react';
import { Nav } from './navbar.styles';
import HopperhockLogo from 'styles/illustrations/hopperhock-logo.svg';
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
      <HopperhockLogo className="brand" />
      <div className="nav-links">
        <Link href="/about-us">
          <a className="nav-link">Home</a>
        </Link>
        <Link href="/about-us">
          <a className="nav-link">Services</a>
        </Link>
        <Link href="/about-us">
          <a className="nav-link">About Us</a>
        </Link>
        <Link href="/about-us">
          <a className="nav-link">Contact Us</a>
        </Link>
      </div>
      <button className="nav-action">BOOK A CALL</button>
    </Nav>
  );
};

export default Navbar;
