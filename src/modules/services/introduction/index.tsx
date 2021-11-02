import React, { FC } from 'react';
import { useTranslation } from 'shared/utils/internationalization';
import Container, { ServicesIntroDescription } from './styles';

const ServicesIntroduction: FC = () => {
  const { t } = useTranslation('services');

  return (
    <Container>
      <ServicesIntroDescription>
        <h1>{t('introduction.title')}</h1>
        <p>
          <span>{t('introduction.description')}</span> <br />{' '}
          {t('introduction.sub-description')}
        </p>
      </ServicesIntroDescription>
    </Container>
  );
};

export default ServicesIntroduction;
