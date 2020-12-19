import React, { useState, useEffect, FC } from 'react';
import HeaderContainer, { Brand, BookCallButton, ToggleButton, LanguageText } from './styles';
import Navbar from '../Navbar';
import MobileNavbar from '../MobileNavbar';
import { useTranslation } from 'shared/utils/internationalization';
import useToggleLanguage from 'shared/hooks/useToggleLanguage';

const Header: FC = () => {
  const { t } = useTranslation('common');
  const { currentLangLabel, handleToggleLanguage } = useToggleLanguage();
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
    setIsMobileNavVisible(prev => !prev);
  }
  return (
    <HeaderContainer transparent={isTransparent} data-transparent={isTransparent}>
      <head>
        <title>HopperHock - Improve, Grown & Innovate</title>
        <link rel="icon" href="/static/favicon.ico" />
      </head>
      <Brand transparent={isTransparent} />
      <MobileNavbar visible={isMobileNavVisible} onToggle={handleMobileToggled} />
      <Navbar transparent={isTransparent} />
      <BookCallButton transparent={isTransparent} href="/contact-us">{t('nav.bookACall')}</BookCallButton>
      <LanguageText transparent={isTransparent} onClick={handleToggleLanguage}>
        {currentLangLabel}
      </LanguageText>
      <ToggleButton transparent={isTransparent} onClick={handleMobileToggled}>
        <span />
        <span />
        <span />
      </ToggleButton>
    </HeaderContainer>
  );
};

export default Header;
