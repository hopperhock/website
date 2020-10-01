import React, { FC } from 'react';
import { NavLink, NavLinks } from './styles';
import Link from 'next/link';
import { useTranslation } from 'shared/utils/internationalization';

type Props = {
  transparent: boolean;
};

const Navbar: FC<Props> = ({ transparent }) => {
  const { t } = useTranslation('common')

  return (
    <NavLinks>
      <Link href="/home">
        <NavLink transparent={transparent}>{t('nav.home')}</NavLink>
      </Link>
      <Link href="/services">
        <NavLink transparent={transparent}>{t('nav.services')}</NavLink>
      </Link>
      <Link href="/about-us">
        <NavLink transparent={transparent}>{t('nav.aboutUs')}</NavLink>
      </Link>
      <Link href="/contact-us">
        <NavLink transparent={transparent}>{t('nav.contactUs')}</NavLink>
      </Link>
    </NavLinks>
  );
};

export default Navbar;
