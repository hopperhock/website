import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import ServicesIntroduction from 'modules/services/introduction';
import ServicesDescription from 'modules/services/description';
import WorkSteps from 'modules/services/work-steps';
import ServiceCapabilities from 'modules/services/capabilities';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Services: NextPage = () => {
  return (
    <Container>
      <ServicesIntroduction />
      <ServicesDescription />
      <WorkSteps />
      <ServiceCapabilities />
    </Container>
  );
};

Services.getInitialProps = () => ({
  namespacesRequired: ['common', 'services'],
});

export default Services;
