import React, { useState, useEffect, FC } from 'react';
import { Nav, Brand, NavLink, NavLinks, NavAction } from './navbar.styles';
import Link from 'next/link';

const Navbar: FC = () => {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const callback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.intersectionRatio > 0) {
          let isTheHeader = !entry.isIntersecting && entry.target.previousSibling.className.includes('header');
          setIsTransparent(isTheHeader);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      threshold: 0.2
    });

    document.querySelectorAll('.sectionqw').forEach((elem) => observer.observe(elem));

    return () => {};
  }, []);

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
