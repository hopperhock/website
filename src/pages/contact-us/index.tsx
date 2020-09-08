import React, { FC } from 'react';
import styled from 'styled-components';
import ContactInformation from 'modules/contact-us/contact-information';
import ContactForm from 'modules/contact-us/contact-form';
import { Breakpoints } from 'styles/utilities/breakpoints';

const Container = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: ${Breakpoints.laptop}) {
    flex-direction: column;
  }
`;

const ContactUs: FC = () => {
  return (
    <Container>
      <ContactInformation />
      <ContactForm />
    </Container>
  );
};

export default ContactUs;
