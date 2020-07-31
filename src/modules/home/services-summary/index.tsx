import React, { FC } from 'react';
import { Container, ServicesContainer, HeaderTitle, HeaderSubtitle } from './index.styles';
import * as translations from './Translations/en.json';
import Card from 'shared/components/Card';
import { Images } from 'shared/constants/assets';

type ServicesSummaryProps = {};

const ServicesSummary: FC<ServicesSummaryProps> = () => {
  return (
    <Container className="sectionqw">
      <HeaderTitle> {translations['home.services.title']}</HeaderTitle>
      <HeaderSubtitle> {translations['home.services.subtitle']}</HeaderSubtitle>
      <ServicesContainer>
        <Card
          image={Images.SERVICE_WEB_BACKGROUND_WEB}
          title="Software Development"
          description=""
          buttons={false}
        ></Card>
        <Card image={Images.SERVICE_WEB_BACKGROUND_QA} title="Quality Assurance" description="" buttons={false}></Card>
        <Card image={Images.SERVICE_WEB_BACKGROUND_UX} title="UX/UI" description="" buttons={false}></Card>
      </ServicesContainer>
    </Container>
  );
};

export default ServicesSummary;
