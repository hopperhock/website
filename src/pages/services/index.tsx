import React from 'react';
import styled from 'styled-components';
import ServicesIntroduction from 'modules/services/introduction';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 200vh;
`;

function Services() {
  return (
    <Container>
      <ServicesIntroduction />
    </Container>
  );
}

export default Services;
