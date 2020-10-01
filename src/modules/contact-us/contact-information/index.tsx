import React, { FC } from 'react';
import { Container, ContactUsInformationTitle, ContactTitle, ContactData, DataContainer, DataSection } from './styles';
import SocialNetworkDisplayer from 'shared/components/SocialNetworkDisplayer';
import { SOCIAL_NETWORK_ICONS } from 'shared/constants/assets';
import { useTranslation } from 'shared/utils/internationalization';

const ContactInformation: FC = () => {
  const { t } = useTranslation('contact-us');

  return (
    <Container>
      <ContactUsInformationTitle>
        <span> {t('information.title')}</span>
      </ContactUsInformationTitle>
      <DataContainer>
        <DataSection>
          <ContactTitle>
            <span />
            <h1>{t('information.contactTitle')}</h1>
          </ContactTitle>
          <ContactData>{t('information.phone')}</ContactData>
          <ContactData>{t('information.email')}</ContactData>
        </DataSection>
        <DataSection>
          <ContactTitle>
            <span />
            <h1>{t('information.addressTitle')}</h1>
          </ContactTitle>
          <ContactData>{t('information.address')}</ContactData>
        </DataSection>
        <DataSection>
          <ContactTitle>
            <span />
            <h1>{t('information.connectTitle')}</h1>
          </ContactTitle>
          <SocialNetworkDisplayer socialLogos={SOCIAL_NETWORK_ICONS} />
        </DataSection>
      </DataContainer>
    </Container>
  );
};

export default ContactInformation;
