import React, { FC } from 'react';
import { Container, ServicesContainer, HeaderTitle, HeaderSubtitle } from './styles';
import { Images } from 'shared/constants/assets';
import ServiceCard from './components/service-card';
import { useTranslation } from 'shared/utils/internationalization';

const ServicesSummary: FC = () => {
  const { t } = useTranslation('home');

  return (
    <Container>
      <HeaderTitle> {t('services.title')}</HeaderTitle>
      <HeaderSubtitle> {t('services.subtitle')}</HeaderSubtitle>
      <ServicesContainer>
        <ServiceCard
          serviceTitle={t('services.develop.title')}
          image={Images.SERVICE_WEB_BACKGROUND_WEB}
          description={t('services.develop.description')}
        ></ServiceCard>
        <ServiceCard
          serviceTitle={t('services.qa.title')}
          image={Images.SERVICE_WEB_BACKGROUND_QA}
          description={t('services.qa.description')}
        ></ServiceCard>
        <ServiceCard
          serviceTitle={t('services.ux.title')}
          image={Images.SERVICE_WEB_BACKGROUND_UX}
          description={t('services.ux.description')}
        ></ServiceCard>
      </ServicesContainer>
    </Container>
  );
};

export default ServicesSummary;
