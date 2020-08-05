import React from 'react';
import Container, { ServicesIntroDescription } from './styles';
import * as translations from './translations/en.json';

function ServicesIntroduction() {
  return (
    <Container>
      <ServicesIntroDescription>
        <h1>{translations['services.introduction.title']}</h1>
        <p>
          <span>{translations['services.introduction.description']}</span> <br />{' '}
          {translations['services.introduction.sub-description']}
        </p>
      </ServicesIntroDescription>
    </Container>
  );
}

export default ServicesIntroduction;
