import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Backdrop from 'shared/components/Backdrop';
import MobileNav, { Brand, LanguageText, MobileNavFooter } from './styles';
import * as translations from './translations/en.json';
import { useTranslation } from 'shared/utils/internationalization';
import useToggleLanguage from 'shared/hooks/useToggleLanguage';

type Props = {
  visible: boolean;
  onToggle: () => void;
};

const MobileNavbar: FC<Props> = ({ visible, onToggle }) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { currentLangLabel, handleToggleLanguage } = useToggleLanguage();

  function handleRedirect(route: string) {
    router.push(route);
    onToggle();
  }
  return (
    <div>
      <Backdrop visible={visible} onToggle={onToggle} />
      <MobileNav visible={visible}>
        <Brand />
        <ul>
          <li onClick={() => handleRedirect('/home')}>{t('nav.home')}</li>
          <li onClick={() => handleRedirect('/services')}>{t('nav.services')}</li>
          <li onClick={() => handleRedirect('/about-us')}>{t('nav.aboutUs')}</li>
          <li onClick={() => handleRedirect('/contact-us')}>{t('nav.contactUs')}</li>
        </ul>
        <MobileNavFooter>
          {t('nav.description')} <br /> <a href="#">{t('nav.bookACall')}</a>
          <LanguageText onClick={handleToggleLanguage}>{currentLangLabel}</LanguageText>
        </MobileNavFooter>
      </MobileNav>
    </div>
  );
};

export default MobileNavbar;
