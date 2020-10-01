import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation } from 'shared/utils/internationalization';
import FooterCard from './FooterCard';
import { Container, LinksContainer, NavLink } from './styles';

const RightContainer: FC = () => {
  const { t } = useTranslation(['common', 'footer']);

  return (
    <Container>
      <FooterCard title={t('footer:right.global.title')} subTitle={t('footer:right.global.subTitle')}>
        <LinksContainer>
          <Link href="/home">
            <NavLink>{t('common:nav.home')}</NavLink>
          </Link>
          <Link href="/services">
            <NavLink>{t('common:nav.services')}</NavLink>
          </Link>
          <Link href="/about-us">
            <NavLink>{t('common:nav.aboutUs')}</NavLink>
          </Link>
          <Link href="/contact-us">
            <NavLink>{t('common:nav.contactUs')}</NavLink>
          </Link>
        </LinksContainer>
      </FooterCard>
      <FooterCard title={t('footer:right.dev.title')} subTitle={t('footer:right.dev.subTitle')}>
        <Link href="/services">
          <NavLink>{t('common:nav.services')}</NavLink>
        </Link>
      </FooterCard>
      <FooterCard title={t('footer:right.design.title')} subTitle={t('footer:right.design.subTitle')}>
        <Link href="/services">
          <NavLink>{t('common:nav.services')}</NavLink>
        </Link>
      </FooterCard>
    </Container>
  );
};

export default RightContainer;
