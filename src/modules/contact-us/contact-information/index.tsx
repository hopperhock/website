import React, { FC } from 'react';
import { Container, ContactUsInformationTitle, ContactTitle, ContactData, DataContainer, DataSection } from './styles';
import * as tranlations from './Translations/en.json';
import SocialNetworkDisplayer from 'shared/components/SocialNetworkDisplayer';
import { SOCIAL_NETWORK_ICONS } from 'shared/constants/assets';

const ContactInformation: FC = () => {
  return (
    <Container>
      <ContactUsInformationTitle>
        <span> {tranlations['contact.information.title']}</span>
      </ContactUsInformationTitle>
      <DataContainer>
        <DataSection>
          <ContactTitle>
            <span />
            <h1>{tranlations['contact.information.contactTitle']}</h1>
          </ContactTitle>
          <ContactData>{tranlations['contact.information.phone']}</ContactData>
          <ContactData>{tranlations['contact.information.email']}</ContactData>
        </DataSection>
        <DataSection>
          <ContactTitle>
            <span />
            <h1>{tranlations['contact.information.addressTitle']}</h1>
          </ContactTitle>
          <ContactData>{tranlations['contact.information.address']}</ContactData>
        </DataSection>
        <DataSection>
          <ContactTitle>
            <span />
            <h1>{tranlations['contact.information.connectTitle']}</h1>
          </ContactTitle>
          <SocialNetworkDisplayer socialLogos={SOCIAL_NETWORK_ICONS} />
        </DataSection>
      </DataContainer>
    </Container>
  );
};

export default ContactInformation;
