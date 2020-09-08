import React, { FC } from 'react';
import { Container, ContactUsInformationTitle } from './styles';
import { Images } from 'shared/constants/assets';
import * as tranlations from './Translations/en.json';
import ContactData from './components/contact-data';

const ContactInformation: FC = () => {
  return (
    <Container>
      <ContactUsInformationTitle>
        <span> {tranlations['contact.information.title']}</span>
      </ContactUsInformationTitle>
      <ContactData />
    </Container>
  );
};

export default ContactInformation;
