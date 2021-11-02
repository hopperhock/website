import React from 'react';
import { HomeIntroContainer, HomeIntroDescription, HomeIntroVideo } from './home-introduction.styles';
import { Images, HOME_VIDEO } from 'shared/constants/assets';
import { useTranslation } from 'shared/utils/internationalization';

const HomeIntroduction = () => {
  const { t } = useTranslation('home');

  return (
    <HomeIntroContainer>
      <HomeIntroDescription>
        <h1>{t('header.title')}</h1>
        <p>{t('header.content')}</p>
      </HomeIntroDescription>
      <HomeIntroVideo poster={Images.HOME_VIDEO_POSTER} autoPlay muted loop>
        <source src={HOME_VIDEO} type="video/mp4" />
      </HomeIntroVideo>
    </HomeIntroContainer>
  );
};

export default HomeIntroduction;
