import React from 'react';
import Container, { AboutUsIntroductionHeader, AboutUsHeaderLine } from './styles';

const AboutUsIntroduction = () => {
  return (
    <Container>
      <AboutUsIntroductionHeader>
        <AboutUsHeaderLine />
        <h2>
          Who we are <br />
          <span>
            Improvers, Collaborators & <br />
            Solution Designers.
          </span>
        </h2>
      </AboutUsIntroductionHeader>
    </Container>
  );
};

export default AboutUsIntroduction;
