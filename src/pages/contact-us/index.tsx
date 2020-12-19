import { Breakpoints } from 'styles/utilities/breakpoints';
import ContactForm from 'modules/contact-us/contact-form';
import ContactInformation from 'modules/contact-us/contact-information';
import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100%;
  @media (max-width: ${Breakpoints.laptop}) {
    flex-direction: column;
  }
`;

const ContactUs: NextPage = () => {
  return (
    <Container>
      <ContactInformation />
      <ContactForm />
    </Container>
  );
};

ContactUs.getInitialProps = () => ({
  namespacesRequired: ['common', 'contact-us'],
});
export default ContactUs;
