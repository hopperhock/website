import { FC } from 'react';
import AboutUsIntroduction from 'modules/about-us/introduction';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutUs: FC = () => {
  return (
    <Container>
      <AboutUsIntroduction />
    </Container>
  );
};

export default AboutUs;
