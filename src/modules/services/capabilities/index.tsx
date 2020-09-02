import React from 'react';
import Container, { CapabilitiesHeading, LineSeparator, Capabilities, Service } from './styles';
import { Images } from 'shared/constants/assets';
import * as translations from './Translations/en.json';

const ServiceCapabilities = () => {
  return (
    <Container>
      <CapabilitiesHeading>
        <span>{translations['home.capabilities.highlighted-title']}</span> {translations['home.capabilities.title']}
      </CapabilitiesHeading>
      <LineSeparator />
      <Capabilities>
        <Service>
          <img src={Images.CB_DESKTOP} />
          <span>{translations['home.capabilities.desktop']}</span>
        </Service>
        <Service>
          <img src={Images.CB_WEB} />
          <span>{translations['home.capabilities.web']}</span>
        </Service>
        <Service>
          <img src={Images.CB_MOBILE} />
          <span>{translations['home.capabilities.mobile']}</span>
        </Service>
        <Service>
          <img src={Images.CB_BACKEND} />
          <span>{translations['home.capabilities.backend']}</span>
        </Service>
        <Service>
          <img src={Images.CB_UX} />
          <span>{translations['home.capabilities.ux']}</span>
        </Service>
        <Service>
          <img src={Images.CB_QA} />
          <span>{translations['home.capabilities.qa']}</span>
        </Service>
      </Capabilities>
    </Container>
  );
};

export default ServiceCapabilities;
