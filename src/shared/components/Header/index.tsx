import React, { useState, useEffect, FC } from 'react';
import HeaderContainer, { Brand, BookCallButton, ToggleButton } from './styles';
import Navbar from '../Navbar';
import MobileNavbar from '../MobileNavbar';
import * as translations from './translations/en.json';

const Header: FC = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
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
  function handleMobileToggled() {
    setIsMobileNavVisible((prev) => !prev);
  }
  return (
    <HeaderContainer transparent={isTransparent} data-transparent={isTransparent}>
      <Brand transparent={isTransparent} />
      <MobileNavbar visible={isMobileNavVisible} onToggle={handleMobileToggled} />
      <Navbar transparent={isTransparent} />
      <BookCallButton transparent={isTransparent}>{translations.actions.bookACall}</BookCallButton>
      <ToggleButton transparent={isTransparent} onClick={handleMobileToggled}>
        <span />
        <span />
        <span />
      </ToggleButton>
    </HeaderContainer>
  );
};

export default Header;
