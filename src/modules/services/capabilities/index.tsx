import React, { FC } from 'react';
import Container, { CapabilitiesHeading, LineSeparator, Capabilities, Service } from './styles';
import { Images } from 'shared/constants/assets';
import { useTranslation } from 'shared/utils/internationalization';

const ServiceCapabilities: FC = () => {
  const { t } = useTranslation('services');

  return (
    <Container>
      <CapabilitiesHeading>
        <span>{t('capabilities.highlighted-title')}</span> {t('capabilities.title')}
      </CapabilitiesHeading>
      <LineSeparator />
      <Capabilities>
        <Service>
          <img src={Images.CB_DESKTOP} />
          <span>{t('capabilities.desktop')}</span>
        </Service>
        <Service>
          <img src={Images.CB_WEB} />
          <span>{t('capabilities.web')}</span>
        </Service>
        <Service>
          <img src={Images.CB_MOBILE} />
          <span>{t('capabilities.mobile')}</span>
        </Service>
        <Service>
          <img src={Images.CB_BACKEND} />
          <span>{t('capabilities.backend')}</span>
        </Service>
        <Service>
          <img src={Images.CB_UX} />
          <span>{t('capabilities.ux')}</span>
        </Service>
        <Service>
          <img src={Images.CB_QA} />
          <span>{t('capabilities.qa')}</span>
        </Service>
      </Capabilities>
    </Container>
  );
};

export default ServiceCapabilities;
