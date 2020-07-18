import React, { FC, useCallback } from 'react';
import Router from 'next/router';
import Button from '././../Button/index';
import { Globals, BlueGrey } from 'styles/utilities/colors';
import {
  ParallaxBannerImage,
  ParallaxContainer,
  ParallaxTextDisplayer,
  ParallaxBoldTextDisplayer
} from './parallaxBanner.styles';
import * as translations from './Translations/en.json';

interface IParallaxBannerProps {
  bannerImage: string;
  bannerContainer: string;
}

const ParallaxBanner: FC<IParallaxBannerProps> = ({ bannerImage, bannerContainer }) => {
  const redirectToContactUs = useCallback(() => Router.push(`/about-us`), []);

  return (
    <ParallaxBannerImage bannerImageSource={bannerImage}>
      <ParallaxContainer bannerContainerSource={bannerContainer}>
        <ParallaxTextDisplayer>
          {translations['home.banner.label']}{' '}
          <ParallaxBoldTextDisplayer>{translations['home.banner.bold.label']}</ParallaxBoldTextDisplayer>
        </ParallaxTextDisplayer>
        <Button color={BlueGrey.DARK_1} textColor={Globals.WHITE} redirectAction={redirectToContactUs}>
          {translations['home.banner.button.label']}
        </Button>
      </ParallaxContainer>
    </ParallaxBannerImage>
  );
};

export default ParallaxBanner;
