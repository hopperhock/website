import React, { FC, useCallback } from 'react';
import { Container, ContactTitle } from './styles';

const ContactData: FC = () => {
  return (
    <Container>
      <ContactTitle>How to reach us</ContactTitle>
      <ContactData>+506 6086 2334</ContactData>
      <ContactData>contact@hopperhock.com</ContactData>
    </Container>
  );
};

export default ContactData;
