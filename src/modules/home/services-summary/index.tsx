import React, { FC } from 'react';
import { Container, ServicesContainer, HeaderTitle, HeaderSubtitle } from './styles';
import * as translations from './Translations/en.json';
import { Images } from 'shared/constants/assets';
import ServiceCard from './components/service-card';

const ServicesSummary: FC = () => {
  return (
    <Container>
      <HeaderTitle> {translations['home.services.title']}</HeaderTitle>
      <HeaderSubtitle> {translations['home.services.subtitle']}</HeaderSubtitle>
      <ServicesContainer>
        <ServiceCard
          serviceTitle={translations['home.services.develop.title']}
          image={Images.SERVICE_WEB_BACKGROUND_WEB}
          description={translations['home.services.develop.description']}
        ></ServiceCard>
        <ServiceCard
          serviceTitle={translations['home.services.qa.title']}
          image={Images.SERVICE_WEB_BACKGROUND_QA}
          description={translations['home.services.qa.description']}
        ></ServiceCard>
        <ServiceCard
          serviceTitle={translations['home.services.ux.title']}
          image={Images.SERVICE_WEB_BACKGROUND_UX}
          description={translations['home.services.ux.description']}
        ></ServiceCard>
      </ServicesContainer>
    </Container>
  );
};

export default ServicesSummary;
