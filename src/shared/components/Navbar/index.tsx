import React, { FC } from 'react';
import { NavLink, NavLinks } from './styles';
import Link from 'next/link';
import * as translations from './translations/en.json';

type Props = {
  transparent: boolean;
};

const Navbar: FC<Props> = ({ transparent }) => {
  return (
    <NavLinks>
      <Link href="/home">
        <NavLink transparent={transparent}>{translations['main-nav.home']}</NavLink>
      </Link>
      <Link href="/services">
        <NavLink transparent={transparent}>{translations['main-nav.services']}</NavLink>
      </Link>
      <Link href="/about-us">
        <NavLink transparent={transparent}>{translations['main-nav.about-us']}</NavLink>
      </Link>
      <Link href="/contact-us">
        <NavLink transparent={transparent}>{translations['main-nav.contact-us']}</NavLink>
      </Link>
    </NavLinks>
  );
};

export default Navbar;
