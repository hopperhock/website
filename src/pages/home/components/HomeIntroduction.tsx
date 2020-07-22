import React from 'react';
import { HomeIntroContainer, HomeIntroDescription, HomeIntroVideo } from './HomeIntroduction.styles';

const HomeIntroduction = () => {
  return (
    <HomeIntroContainer>
      <HomeIntroDescription>
        <h1>WE ARE HOPPERHOCK</h1>
        <p>Custom Software Solutions That Empowers Your Business</p>
      </HomeIntroDescription>
      <HomeIntroVideo poster="/Images/VideoPoster.png" autoPlay muted loop>
        <source src="/Videos/HopperhockVideo.mp4" type="video/mp4" />
      </HomeIntroVideo>
    </HomeIntroContainer>
  );
};

export default HomeIntroduction;
