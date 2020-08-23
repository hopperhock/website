import React from 'react';
import { HomeIntroContainer, HomeIntroDescription, HomeIntroVideo } from './home-introduction.styles';
import { Images, HOME_VIDEO } from 'shared/constants/assets';

const HomeIntroduction = () => {
  return (
    <HomeIntroContainer>
      <HomeIntroDescription>
        <h1>WE ARE HOPPERHOCK.</h1>
        <p>Custom Software Solutions That Empower Your Business.</p>
      </HomeIntroDescription>
      <HomeIntroVideo poster={Images.HOME_VIDEO_POSTER} autoPlay muted loop>
        <source src={HOME_VIDEO} type="video/mp4" />
      </HomeIntroVideo>
    </HomeIntroContainer>
  );
};

export default HomeIntroduction;
