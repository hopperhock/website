import React from 'react';
import styled from 'styled-components';
import ServicesIntroduction from 'modules/services/introduction';
import ServicesDescription from 'modules/services/description';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function Services() {
  return (
    <Container>
      <ServicesIntroduction />
      <ServicesDescription />
    </Container>
  );
}

export default Services;
