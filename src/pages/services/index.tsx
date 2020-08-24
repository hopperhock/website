import React, { FC } from 'react';
import styled from 'styled-components';
import ServicesIntroduction from 'modules/services/introduction';
import ServicesDescription from 'modules/services/description';
import WorkSteps from 'modules/services/work-steps';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Services: FC = () => {
  return (
    <Container>
      <ServicesIntroduction />
      <ServicesDescription />
      <WorkSteps />
    </Container>
  );
};

export default Services;
