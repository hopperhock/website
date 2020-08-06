import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Backdrop from 'shared/components/Backdrop';
import MobileNav, { Brand, MobileNavFooter } from './styles';
import * as translations from './translations/en.json';

type Props = {
  visible: boolean;
  onToggle: () => void;
};

const MobileNavbar: FC<Props> = ({ visible, onToggle }) => {
  const router = useRouter();
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
          <li onClick={() => handleRedirect('/home')}>{translations['mobile-nav.home']}</li>
          <li onClick={() => handleRedirect('/services')}>{translations['mobile-nav.services']}</li>
          <li onClick={() => handleRedirect('/about-us')}>{translations['mobile-nav.about-us']}</li>
          <li onClick={() => handleRedirect('/contact-us')}>{translations['mobile-nav.contact-us']}</li>
        </ul>
        <MobileNavFooter>
          {translations['mobile-nav.description']} <br /> <a href="#">{translations['mobile-nav.book-call']}</a>
        </MobileNavFooter>
      </MobileNav>
    </div>
  );
};

export default MobileNavbar;
