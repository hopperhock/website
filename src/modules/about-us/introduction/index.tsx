import React, { FC } from 'react';
import { useTranslation } from 'shared/utils/internationalization';
import Container, { AboutUsIntroductionHeader, AboutUsHeaderLine } from './styles';

const AboutUsIntroduction: FC = () => {
  const { t } = useTranslation('about-us');

  return (
    <Container>
      <AboutUsIntroductionHeader>
        <AboutUsHeaderLine />
        <h2>
          {t('header.title')} <br />
          <span>
            {t('header.sub-title')} <br />
            {t('header.sub-title-designers')}
          </span>
        </h2>
      </AboutUsIntroductionHeader>
    </Container>
  );
};


export default AboutUsIntroduction;
